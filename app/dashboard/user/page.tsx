"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  Search,
  MapPin,
  Star,
  Heart,
  Eye,
  Filter,
  Map,
  List,
  QrCode,
  Receipt,
  LogOut,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function UserDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"list" | "map">("list")

  // Mock data
  const userBookings = [
    {
      id: 1,
      property: "Sunset Villa Apartments",
      room: "A-101",
      rent: 800,
      status: "active",
      moveInDate: "2024-01-01",
      nextPayment: "2024-02-01",
      image: "/placeholder.svg?height=100&width=150",
    },
  ]

  const favorites = [
    {
      id: 2,
      name: "Green Garden Residence",
      location: "University Area",
      price: 650,
      rating: 4.6,
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 3,
      name: "Modern City Suites",
      location: "Business District",
      price: 950,
      rating: 4.9,
      image: "/placeholder.svg?height=150&width=200",
    },
  ]

  const nearbyProperties = [
    {
      id: 1,
      name: "Sunset Villa Apartments",
      location: "Downtown District",
      price: 800,
      rating: 4.8,
      distance: "0.5 km",
      availableRooms: 2,
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 2,
      name: "Green Garden Residence",
      location: "University Area",
      price: 650,
      rating: 4.6,
      distance: "1.2 km",
      availableRooms: 3,
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 3,
      name: "Modern City Suites",
      location: "Business District",
      price: 950,
      rating: 4.9,
      distance: "2.1 km",
      availableRooms: 5,
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 4,
      name: "Cozy Corner Apartments",
      location: "Residential Area",
      price: 720,
      rating: 4.4,
      distance: "1.8 km",
      availableRooms: 1,
      image: "/placeholder.svg?height=150&width=200",
    },
  ]

  const paymentHistory = [
    { id: 1, date: "2024-01-01", amount: 800, type: "Rent", status: "paid" },
    { id: 2, date: "2023-12-01", amount: 800, type: "Rent", status: "paid" },
    { id: 3, date: "2023-11-01", amount: 800, type: "Rent", status: "paid" },
  ]

  const filteredProperties = nearbyProperties.filter(
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
            <Badge variant="outline" className="ml-2">
              Renter
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome back, Sarah!</span>
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
        <Tabs defaultValue="browse" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="browse">Browse Properties</TabsTrigger>
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search properties by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                >
                  <Map className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {viewMode === "list" ? (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Properties Near You</h2>
                  <span className="text-sm text-gray-600">{filteredProperties.length} properties found</span>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProperties.map((property) => (
                    <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={property.image || "/placeholder.svg"}
                          alt={property.name}
                          fill
                          className="object-cover"
                        />
                        <Button size="sm" variant="secondary" className="absolute top-2 right-2">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{property.name}</CardTitle>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{property.rating}</span>
                          </div>
                        </div>
                        <CardDescription className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {property.location} • {property.distance}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-2xl font-bold text-blue-600">${property.price}</span>
                            <span className="text-gray-600">/month</span>
                          </div>
                          <div className="text-sm text-gray-600">{property.availableRooms} rooms available</div>
                        </div>
                        <Button className="w-full" asChild>
                          <Link href={`/properties/${property.id}`}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <Card className="h-96">
                <CardContent className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <Map className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Interactive Map View</h3>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Interactive Map View</h3>
                    <p className="text-gray-600">Map integration would show properties with location pins</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <h2 className="text-2xl font-bold">My Bookings</h2>

            {userBookings.length > 0 ? (
              <div className="space-y-4">
                {userBookings.map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-24 h-16 bg-gray-200 rounded-lg overflow-hidden">
                          <img
                            src={booking.image || "/placeholder.svg"}
                            alt={booking.property}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{booking.property}</h3>
                          <p className="text-gray-600">Room {booking.room}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <Badge variant={booking.status === "active" ? "default" : "secondary"}>
                              {booking.status}
                            </Badge>
                            <span className="text-sm text-gray-600">Move-in: {booking.moveInDate}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">${booking.rent}</div>
                          <div className="text-sm text-gray-600">per month</div>
                          <div className="text-sm text-orange-600 mt-1">Next payment: {booking.nextPayment}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button size="sm" variant="outline">
                            <QrCode className="mr-2 h-4 w-4" />
                            Payment QR
                          </Button>
                          <Button size="sm" variant="outline">
                            <Receipt className="mr-2 h-4 w-4" />
                            Receipt
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Bookings</h3>
                  <p className="text-gray-600 mb-4">You haven't booked any properties yet</p>
                  <Button asChild>
                    <Link href="#browse">Browse Properties</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <h2 className="text-2xl font-bold">My Favorites</h2>

            {favorites.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((property) => (
                  <Card key={property.id} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.name}
                        fill
                        className="object-cover"
                      />
                      <Button size="sm" variant="secondary" className="absolute top-2 right-2">
                        <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                      </Button>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{property.name}</CardTitle>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{property.rating}</span>
                        </div>
                      </div>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {property.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-blue-600">${property.price}</span>
                          <span className="text-gray-600">/month</span>
                        </div>
                      </div>
                      <Button className="w-full" asChild>
                        <Link href={`/properties/${property.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Favorites Yet</h3>
                  <p className="text-gray-600 mb-4">Save properties you like to view them later</p>
                  <Button asChild>
                    <Link href="#browse">Browse Properties</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <h2 className="text-2xl font-bold">Payment History</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Current Payment Status */}
              <Card>
                <CardHeader>
                  <CardTitle>Current Payment Status</CardTitle>
                </CardHeader>
                <CardContent>
                  {userBookings.length > 0 ? (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Monthly Rent:</span>
                        <span className="font-semibold">${userBookings[0].rent}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Next Payment Due:</span>
                        <span className="font-semibold text-orange-600">{userBookings[0].nextPayment}</span>
                      </div>
                      <Button className="w-full">
                        <QrCode className="mr-2 h-4 w-4" />
                        Generate Payment QR
                      </Button>
                    </div>
                  ) : (
                    <p className="text-gray-600">No active bookings</p>
                  )}
                </CardContent>
              </Card>

              {/* Payment Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Total Paid This Year:</span>
                      <span className="font-semibold text-green-600">
                        ${paymentHistory.reduce((sum, payment) => sum + payment.amount, 0)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Payments Made:</span>
                      <span className="font-semibold">{paymentHistory.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Payment Status:</span>
                      <Badge variant="default">Up to Date</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment History */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentHistory.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{payment.type}</h4>
                          <p className="text-sm text-gray-600">{payment.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${payment.amount}</div>
                        <Badge variant="default" className="text-xs">
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
