"use client";

import type React from "react";

import { useState } from "react";
import {
  Search,
  MessageCircle,
  Car,
  PenToolIcon as Tool,
  Clock,
  Truck,
  Mic,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AutoZoneHomepage() {
  const [chatStep, setChatStep] = useState<"closed" | "name" | "voice">(
    "closed"
  );
  const [userName, setUserName] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const handleStartChat = () => {
    setChatStep("name");
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      setChatStep("voice");
    }
  };

  const handleCloseChat = () => {
    setChatStep("closed");
    setUserName("");
    setIsRecording(false);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Car className="h-6 w-6 text-[#D63E1A]" />
            <span className="text-2xl font-bold text-[#D63E1A]">AutoZone</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Get the Right Parts.
              <span className="text-[#D63E1A] block mt-2">Right Now.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mt-4">
              Free Next Day Delivery on Eligible Orders
            </p>

            <div className="relative mt-8">
              <div className="flex max-w-md mx-auto">
                <Input
                  type="text"
                  placeholder="Enter vehicle or part number"
                  className="rounded-r-none h-12 bg-white/10 backdrop-blur-sm border-slate-700 text-white placeholder:text-slate-400 pr-4 focus-visible:ring-primary"
                />
                <Button size="lg" className="rounded-l-none h-12 bg-[#D63E1A]">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
              <div className="mt-2 flex gap-2 text-sm text-slate-300 justify-center">
                <span className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  Quick delivery
                </span>
                <span className="flex items-center">
                  <Tool className="mr-1 h-3 w-3" />
                  Genuine parts
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why Choose AutoZone?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#D63E1A]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-[#D63E1A]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Free next-day delivery on thousands of parts and accessories.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#D63E1A]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Tool className="h-6 w-6 text-[#D63E1A]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Parts</h3>
                <p className="text-muted-foreground">
                  Genuine OEM and high-quality aftermarket parts for all
                  vehicles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#D63E1A]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-[#D63E1A]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Support</h3>
                <p className="text-muted-foreground">
                  Get help from our team of automotive experts anytime you need
                  it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agent Chat Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <Button
          size="lg"
          className="rounded-full shadow-lg cursor-pointer bg-[#D63E1A]"
          onClick={handleStartChat}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Talk to an Agent!
        </Button>
      </div>

      {/* Name Input Dialog */}
      <Dialog
        open={chatStep === "name"}
        onOpenChange={(open) => !open && handleCloseChat()}
      >
        {/* <DialogContent className="sm:max-w-md"> */}
        <DialogContent className="sm:max-w-md w-full">
          <DialogHeader>
            <DialogTitle className="text-xl text-center">
              Enter your name to connect with support
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleNameSubmit}>
            <div className="py-6">
              <Input
                id="name"
                placeholder="Your name"
                className="w-full"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                autoFocus
              />
            </div>
            <DialogFooter className="flex gap-2">
              <Button
                type="submit"
                className="w-1/2 bg-primary hover:bg-primary/90"
              >
                Connect
              </Button>
              <Button
                variant="secondary"
                className="w-1/2"
                onClick={handleCloseChat}
              >
                Cancel
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Voice Recording Dialog */}
      <Dialog
        open={chatStep === "voice"}
        onOpenChange={(open) => !open && handleCloseChat()}
      >
        <DialogContent className="sm:max-w-md p-8">
          <div className="flex flex-col items-center justify-center h-64">
            {/* Voice Visualization */}
            <div className="flex items-end justify-center gap-1 h-32 mb-8">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 bg-gray-400 rounded-full transition-all duration-300"
                  style={{
                    height: isRecording
                      ? `${Math.max(20, Math.floor(Math.random() * 100))}px`
                      : "40px",
                  }}
                ></div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={toggleRecording}
                >
                  <Mic
                    className={`h-5 w-5 ${
                      isRecording ? "text-[#D63E1A]" : "text-gray-500"
                    }`}
                  />
                </Button>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>

              <Button
                variant="outline"
                className="text-gray-700"
                onClick={handleCloseChat}
              >
                Disconnect
              </Button>
            </div>

            {/* Message Area */}
            <div className="w-full h-16 border rounded-md bg-gray-50"></div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
