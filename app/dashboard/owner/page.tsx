"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  Users,
  DollarSign,
  TrendingUp,
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  MapPin,
  Bed,
  LogOut,
} from "lucide-react"
import Link from "next/link"

export default function OwnerDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data
  const stats = {
    totalProperties: 3,
    totalRooms: 74,
    occupiedRooms: 68,
    monthlyIncome: 54200,
  }

  const properties = [
    {
      id: 1,
      name: "Sunset Villa Apartments",
      location: "Downtown District",
      floors: 3,
      totalRooms: 24,
      occupiedRooms: 22,
      monthlyIncome: 19200,
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 2,
      name: "Green Garden Residence",
      location: "University Area",
      floors: 2,
      totalRooms: 18,
      occupiedRooms: 16,
      monthlyIncome: 10400,
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 3,
      name: "Modern City Suites",
      location: "Business District",
      floors: 4,
      totalRooms: 32,
      occupiedRooms: 30,
      monthlyIncome: 24600,
      image: "/placeholder.svg?height=150&width=200",
    },
  ]

  const recentBookings = [
    {
      id: 1,
      renterName: "John Smith",
      property: "Sunset Villa",
      room: "A-101",
      date: "2024-01-15",
      status: "confirmed",
    },
    {
      id: 2,
      renterName: "Sarah Johnson",
      property: "Green Garden",
      room: "B-205",
      date: "2024-01-14",
      status: "pending",
    },
    {
      id: 3,
      renterName: "Mike Wilson",
      property: "Modern City",
      room: "C-301",
      date: "2024-01-13",
      status: "confirmed",
    },
  ]

  const filteredProperties = properties.filter(
    (property) =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold">RentHouse</span>
            <Badge variant="secondary" className="ml-2">
              Owner
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome back, John!</span>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalProperties}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Rooms</CardTitle>
              <Bed className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalRooms}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.round((stats.occupiedRooms / stats.totalRooms) * 100)}%</div>
              <p className="text-xs text-muted-foreground">
                {stats.occupiedRooms} of {stats.totalRooms} rooms
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.monthlyIncome.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="properties" className="space-y-6">
          <TabsList>
            <TabsTrigger value="properties">My Properties</TabsTrigger>
            <TabsTrigger value="bookings">Recent Bookings</TabsTrigger>
            <TabsTrigger value="reports">Income Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="properties" className="space-y-6">
            {/* Properties Management */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Properties</h2>
              <Button asChild>
                <Link href="/dashboard/owner/properties/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Property
                </Link>
              </Button>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{property.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {property.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Floors:</span>
                        <span>{property.floors}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Rooms:</span>
                        <span>
                          {property.occupiedRooms}/{property.totalRooms}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Monthly Income:</span>
                        <span className="font-semibold text-green-600">${property.monthlyIncome.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <Link href={`/dashboard/owner/properties/${property.id}`}>
                          <Eye className="mr-1 h-3 w-3" />
                          View
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="mr-1 h-3 w-3" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <h2 className="text-2xl font-bold">Recent Bookings</h2>
            <Card>
              <CardHeader>
                <CardTitle>Latest Booking Requests</CardTitle>
                <CardDescription>Manage incoming booking requests from renters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{booking.renterName}</h4>
                        <p className="text-sm text-gray-600">
                          {booking.property} - Room {booking.room}
                        </p>
                        <p className="text-xs text-gray-500">{booking.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                          {booking.status}
                        </Badge>
                        {booking.status === "pending" && (
                          <div className="flex gap-1">
                            <Button size="sm" variant="outline">
                              Approve
                            </Button>
                            <Button size="sm" variant="outline">
                              Decline
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <h2 className="text-2xl font-bold">Income Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Income</CardTitle>
                  <CardDescription>Income breakdown by property</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {properties.map((property) => (
                      <div key={property.id} className="flex justify-between items-center">
                        <span className="text-sm">{property.name}</span>
                        <span className="font-semibold">${property.monthlyIncome.toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 flex justify-between items-center font-bold">
                      <span>Total</span>
                      <span>${stats.monthlyIncome.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Yearly Overview</CardTitle>
                  <CardDescription>Annual income projection</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      ${(stats.monthlyIncome * 12).toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-600">Projected Annual Income</p>
                    <div className="mt-4 text-sm">
                      <div className="flex justify-between">
                        <span>Average Monthly:</span>
                        <span>${stats.monthlyIncome.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Growth Rate:</span>
                        <span className="text-green-600">+12%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
