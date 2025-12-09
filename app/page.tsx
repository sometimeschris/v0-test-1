"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, Wrench, Clock, DollarSign, MapPin } from "lucide-react"

export default function CostCalculator() {
  const [materials, setMaterials] = useState<string>("")
  const [laborHours, setLaborHours] = useState<string>("")
  const [travelHours, setTravelHours] = useState<string>("")
  const [hourlyRate, setHourlyRate] = useState<string>("85")
  const [travelRate, setTravelRate] = useState<string>("65")

  const calculateTotal = () => {
    const materialsValue = Number.parseFloat(materials) || 0
    const laborValue = (Number.parseFloat(laborHours) || 0) * (Number.parseFloat(hourlyRate) || 0)
    const travelValue = (Number.parseFloat(travelHours) || 0) * (Number.parseFloat(travelRate) || 0)
    return materialsValue + laborValue + travelValue
  }

  const total = calculateTotal()
  const materialsValue = Number.parseFloat(materials) || 0
  const laborValue = (Number.parseFloat(laborHours) || 0) * (Number.parseFloat(hourlyRate) || 0)
  const travelValue = (Number.parseFloat(travelHours) || 0) * (Number.parseFloat(travelRate) || 0)

  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex items-center justify-center rounded-full bg-primary p-3">
              <Calculator className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="mb-2 text-balance text-4xl font-bold tracking-tight">ElectrictionCostCalculator</h1>
          <p className="text-pretty text-lg text-muted-foreground">
            Calculate your total project costs with materials, labor, and travel
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Input Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Project Details
              </CardTitle>
              <CardDescription>Enter your project information below</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Materials */}
              <div className="space-y-2">
                <Label htmlFor="materials" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Materials Cost
                </Label>
                <Input
                  id="materials"
                  type="number"
                  placeholder="0.00"
                  value={materials}
                  onChange={(e) => setMaterials(e.target.value)}
                  className="text-lg"
                  min="0"
                  step="0.01"
                />
              </div>

              {/* Labor Hours */}
              <div className="space-y-2">
                <Label htmlFor="laborHours" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Labor Hours
                </Label>
                <Input
                  id="laborHours"
                  type="number"
                  placeholder="0"
                  value={laborHours}
                  onChange={(e) => setLaborHours(e.target.value)}
                  className="text-lg"
                  min="0"
                  step="0.25"
                />
                <div className="flex items-center justify-between text-sm">
                  <Label htmlFor="hourlyRate" className="text-muted-foreground">
                    Hourly Rate
                  </Label>
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">$</span>
                    <Input
                      id="hourlyRate"
                      type="number"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(e.target.value)}
                      className="h-8 w-20 text-sm"
                      min="0"
                      step="1"
                    />
                  </div>
                </div>
              </div>

              {/* Travel Time */}
              <div className="space-y-2">
                <Label htmlFor="travelHours" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Travel Time (hours)
                </Label>
                <Input
                  id="travelHours"
                  type="number"
                  placeholder="0"
                  value={travelHours}
                  onChange={(e) => setTravelHours(e.target.value)}
                  className="text-lg"
                  min="0"
                  step="0.25"
                />
                <div className="flex items-center justify-between text-sm">
                  <Label htmlFor="travelRate" className="text-muted-foreground">
                    Travel Rate
                  </Label>
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">$</span>
                    <Input
                      id="travelRate"
                      type="number"
                      value={travelRate}
                      onChange={(e) => setTravelRate(e.target.value)}
                      className="h-8 w-20 text-sm"
                      min="0"
                      step="1"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Cost Breakdown
              </CardTitle>
              <CardDescription>Your project estimate</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 border-b pb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Materials</span>
                  <span className="font-medium">${materialsValue.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Labor ({Number.parseFloat(laborHours) || 0} hrs × ${Number.parseFloat(hourlyRate) || 0}/hr)
                  </span>
                  <span className="font-medium">${laborValue.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Travel ({Number.parseFloat(travelHours) || 0} hrs × ${Number.parseFloat(travelRate) || 0}/hr)
                  </span>
                  <span className="font-medium">${travelValue.toFixed(2)}</span>
                </div>
              </div>

              <div className="rounded-lg bg-primary p-6 text-center">
                <p className="mb-2 text-sm font-medium text-primary-foreground/80">Total Cost</p>
                <p className="text-4xl font-bold text-primary-foreground">${total.toFixed(2)}</p>
              </div>

              <div className="rounded-md bg-muted p-4">
                <p className="text-pretty text-xs text-muted-foreground">
                  <strong>Note:</strong> This is an estimate. Final costs may vary based on actual project requirements,
                  material availability, and site conditions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
