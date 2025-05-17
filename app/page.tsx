"use client";

import CardStatusChart from "@/components/homepage/CardStatusChart";
import MetricCard from "@/components/homepage/MetricCard";
import MonthlyIssuanceChart from "@/components/homepage/MonthlyIssuanceChart";
import QuickAccessCard from "@/components/homepage/QuickAccessCard";
import RecentCardRequests from "@/components/homepage/RecentCardRequests";
import WeeklyIncomeChart from "@/components/homepage/WeeklyIncomeChart";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar1Icon, ExpandIcon } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import { moveMessagePortToContext } from "worker_threads";

export default function Home() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  return (
    <main className="flex-1 overflow-auto p-6 bg-slate-50">
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">
              Hi Nazeer, what would you like to do today?
            </h1>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Last login:</span>{" "}
              {moment(new Date()).format("D/MM/YYYY HH:mm:ss")}
            </p>
          </div>

          <div className="flex justify-end">
          <div className="flex items-center gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8">
                        <Calendar1Icon />
                        Today
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="end">
                      <Calendar
                        mode="single"
                        selected={currentDate}
                        onSelect={(date) => date && setCurrentDate(date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <span className="text-sm text-muted-foreground">{moment(currentDate).format("ddd. MMM yyyy")}</span>
                </div> 
            {/* <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8">
                Today
              </Button>
              <span className="text-sm text-muted-foreground">
                {moment(new Date()).format("D MMM YYYY")}
              </span>
            </div> */}
          </div>
        </div>

        <div className="bg-white border-[1px] border-black/20 rounded-lg p-4">
          <h2 className="text-lg font-medium mb-4">Your Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickAccessCard
              icon="credit-card"
              title="Manage a Card"
              color="blue"
            />
            <QuickAccessCard
              icon="credit-card"
              title="Issue Instant Card"
              color="blue"
            />
            <QuickAccessCard
              icon="credit-card"
              title="Issue Personalized Card"
              color="blue"
            />
            <QuickAccessCard
              icon="credit-card"
              title="Review Card Requests"
              color="blue"
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              icon="credit-card"
              title="Total Active Cards"
              value="26,478"
              change="+9%"
              period="this month"
              trend="up"
              color="blue"
            />
            <MetricCard
              icon="credit-card"
              title="Total Personalized Cards"
              value="15,703"
              change="+8.2%"
              period="this month"
              trend="up"
              color="blue"
            />
            <MetricCard
              icon="dollar-sign"
              title="Today's Revenue"
              value="₦9.3M"
              change="+24%"
              period="vs yesterday"
              trend="up"
              color="blue"
            />
            <MetricCard
              icon="alert-circle"
              title="Pending Requests"
              value="38"
              alert="Requires attention"
              color="orange"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-4 shadow-none">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Monthly Issuance</h3>
              {/* <Button variant="ghost" size="icon">
                <span className="sr-only">Expand</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 13.5H1.5M13.5 13.5V1.5M13.5 13.5L1.5 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button> */}
            </div>
            <MonthlyIssuanceChart />
          </Card>

          <Card className="p-4 shadow-none">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">Recent Card Requests</h3>
              <Button variant="ghost" size="icon">
                <ExpandIcon />
              </Button>
            </div>
            <RecentCardRequests />
          </Card>

          <Card className="p-4 shadow-none">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">This Week's Income</h3>
            </div>
            <WeeklyIncomeChart />
          </Card>

          <Card className="p-4 shadow-none">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Card Status Distribution</h3>
            </div>
            <CardStatusChart />
          </Card>
        </div>
      </div>
    </main>
  );
}
