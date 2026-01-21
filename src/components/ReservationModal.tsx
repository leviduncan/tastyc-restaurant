import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, Users, X, Loader2, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const reservationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string({ required_error: "Please select a time" }),
  guests: z.string({ required_error: "Please select number of guests" }),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const timeSlots = [
  "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
  "19:00", "19:30", "20:00", "20:30", "21:00", "21:30",
];

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

const ReservationModal = ({ isOpen, onClose }: ReservationModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true);

    const payload = {
      name: data.name.trim(),
      date: format(data.date, "yyyy-MM-dd"),
      time: data.time,
      guests: data.guests,
    };

    try {
      const { data, error } = await supabase.functions.invoke('send-reservation', {
        body: payload,
      });

      if (error) {
        throw new Error(error.message || "Failed to submit reservation");
      }

      setIsSuccess(true);
      toast({
        title: "Reservation Submitted!",
        description: "We'll confirm your booking shortly.",
      });

      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        form.reset();
      }, 2000);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setIsSuccess(false);
      form.reset();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] bg-tastyc-dark border-white/10 text-white p-0 overflow-hidden">
        <div className="relative">
          {/* Header Image */}
          <div className="h-32 bg-gradient-to-b from-primary/20 to-transparent relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600')] bg-cover bg-center opacity-30" />
          </div>

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            disabled={isSubmitting}
          >
            <X size={24} />
          </button>

          <div className="px-8 pb-8 -mt-8 relative">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-3xl font-serif text-center">
                Reserve a Table
              </DialogTitle>
              <p className="text-center text-tastyc-text-light text-sm mt-2">
                Book your dining experience with us
              </p>
            </DialogHeader>

            {isSuccess ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-serif mb-2">Reservation Confirmed!</h3>
                <p className="text-tastyc-text-light text-sm">
                  We look forward to seeing you!
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="text-white/80">Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white justify-start",
                                    !field.value && "text-white/40"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {field.value ? format(field.value, "MMM d") : "Select"}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-tastyc-dark border-white/10" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                                className="pointer-events-auto bg-tastyc-dark text-white"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Time</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                                <Clock className="mr-2 h-4 w-4 text-white/40" />
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-tastyc-dark border-white/10 max-h-48">
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time} className="text-white hover:bg-white/10">
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="guests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Guests</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                                <Users className="mr-2 h-4 w-4 text-white/40" />
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-tastyc-dark border-white/10">
                              {guestOptions.map((num) => (
                                <SelectItem key={num} value={num} className="text-white hover:bg-white/10">
                                  {num} {num === "1" ? "Guest" : "Guests"}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full tastyc-btn-primary h-12 text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Confirm Reservation"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;
