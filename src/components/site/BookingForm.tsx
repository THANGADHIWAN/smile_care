"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, Stethoscope } from "lucide-react";
import { CONSULTATION_TYPES, TIME_SLOTS, buildWhatsAppBookingURL } from "@/lib/clinic";
import { toast } from "sonner";

export function BookingForm() {
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [consult, setConsult] = useState("");

  const submit = () => {
    if (!date || !time || !consult) {
      toast.error("Please select date, time and consultation type.");
      return;
    }
    const formatted = date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
    window.open(buildWhatsAppBookingURL(formatted, time, consult), "_blank");
  };

  return (
    <div className="bg-card rounded-3xl shadow-card border p-6 md:p-8 grid md:grid-cols-3 gap-6">
      <div>
        <label className="flex items-center gap-2 text-sm font-semibold mb-3">
          <CalendarDays className="w-4 h-4 text-primary" /> Select Date
        </label>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
          className="w-full rounded-xl border pointer-events-auto"
        />
      </div>

      <div className="space-y-6">
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold mb-3">
            <Clock className="w-4 h-4 text-primary" /> Select Time
          </label>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a time slot" />
            </SelectTrigger>
            <SelectContent>
              {TIME_SLOTS.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold mb-3">
            <Stethoscope className="w-4 h-4 text-primary" /> Consultation Type
          </label>
          <Select value={consult} onValueChange={setConsult}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select consultation" />
            </SelectTrigger>
            <SelectContent>
              {CONSULTATION_TYPES.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4">
        <div className="rounded-2xl bg-gradient-hero text-primary-foreground p-5">
          <div className="text-xs uppercase tracking-widest opacity-80">Booking Summary</div>
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="opacity-70">Date</span>
              <span className="font-medium">
                {date ? date.toLocaleDateString("en-IN", { day: "numeric", month: "short" }) : "—"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-70">Time</span>
              <span className="font-medium">{time || "—"}</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-70">Type</span>
              <span className="font-medium text-right">{consult || "—"}</span>
            </div>
          </div>
        </div>
        <Button
          onClick={submit}
          size="lg"
          className="w-full bg-gold text-gold-foreground hover:bg-gold/90 font-semibold"
        >
          Book via WhatsApp
        </Button>
        <p className="text-xs text-muted-foreground text-center">
          You'll be redirected to WhatsApp with your booking details pre-filled.
        </p>
      </div>
    </div>
  );
}
