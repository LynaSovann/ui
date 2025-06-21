"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Building2, DollarSign, Search, Plus, Edit, Trash2, MapPin, QrCode, Receipt } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function PropertyDetailPage() {
  const params = useParams()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFloor, setSelectedFloor] = useState("all")

  // Mock property data
  const property = {
    id: 1,
    name: "Sunset Villa Apartments",
    location: "Downtown District, City Center",
    description: "Modern apartment complex with excellent amenities and prime location.",
    floors: 3,
    totalRooms: 24,
    occupiedRooms: 22,
    monthlyIncome: 19200,
    amenities: ["WiFi", "Parking", "Security", "Laundry", "Gym"],
    image: "/placeholder.svg?height=300&width=500",
  }

  // Mock rooms data
  const rooms = [
    {
      id: 1,
      number: "A-101",
      floor: 1,
      type: "Studio",
      rent: 800,
      status: "occupied",
      renter: "John Smith",
      phone: "+1234567890",
      moveInDate: "2024-01-01",
    },
    {
      id: 2,
      number: "A-102",
      floor: 1,
      type: "1BR",
      rent: 950,
      status: "available",
      renter: null,
      phone: null,
      moveInDate: null,
    },
    {
      id: 3,
      number: "A-103",
      floor: 1,
      type: "Studio",
      rent: 800,
      status: "occupied",
      renter: "Sarah Johnson",
      phone: "+1234567891",
      moveInDate: "2023-12-15",
    },
    {
      id: 4,
      number: "B-201",
      floor: 2,
      type: "1BR",
      rent: 950,
      status: "occupied",
      renter: "Mike Wilson",
      phone: "+1234567892",
      moveInDate: "2024-01-10",
    },
    {
      id: 5,
      number: "B-202",
      floor: 2,
      type: "2BR",
      rent: 1200,
      status: "available",
      renter: null,
      phone: null,
      moveInDate: null,
    },
    {
      id: 6,
      number: "B-203",
      floor: 2,
      type: "Studio",
      rent: 800,
      status: "maintenance",
      renter: null,
      phone: null,
      moveInDate: null,
    },
    {
      id: 7,
      number: "C-301",
      floor: 3,
      type: "2BR",
      rent: 1200,
      status: "occupied",
      renter: "Emma Davis",
      phone: "+1234567893",
      moveInDate: "2023-11-20",
    },
    {
      id: 8,
      number: "C-302",
      floor: 3,
      type: "1BR",
      rent: 950,
      status: "occupied",
      renter: "David Brown",
      phone: "+1234567894",
      moveInDate: "2024-01-05",
    },
  ]

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch =
      room.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (room.renter && room.renter.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesFloor = selectedFloor === "all" || room.floor.toString() === selectedFloor
    return matchesSearch && matchesFloor
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "occupied":
        return "default"
      case "available":
        return "secondary"
      case "maintenance":
        return "destructive"
      default:
        return "secondary"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/dashboard/owner">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">{property.name}</span>
            </div>
          </div>
          <Button asChild>
            <Link href={`/dashboard/owner/properties/${property.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Property
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Property Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Property Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{property.location}</span>
                  </div>
                  <p className="text-gray-600">{property.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {property.amenities.map((amenity) => (
                      <Badge key={amenity} variant="outline">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Property Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Total Floors:</span>
                  <span className="font-semibold">{property.floors}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Rooms:</span>
                  <span className="font-semibold">{property.totalRooms}</span>
                </div>
                <div className="flex justify-between">
                  <span>Occupied:</span>
                  <span className="font-semibold">{property.occupiedRooms}</span>
                </div>
                <div className="flex justify-between">
                  <span>Available:</span>
                  <span className="font-semibold">{property.totalRooms - property.occupiedRooms}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span>Monthly Income:</span>
                  <span className="font-bold text-green-600">${property.monthlyIncome.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full" variant="outline">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New Room
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Room</DialogTitle>
                      <DialogDescription>Create a new room in this property</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="roomNumber">Room Number</Label>
                        <Input id="roomNumber" placeholder="e.g., A-104" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="floor">Floor</Label>
                        <Input id="floor" type="number" placeholder="1" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="type">Room Type</Label>
                        <Input id="type" placeholder="e.g., Studio, 1BR, 2BR" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rent">Monthly Rent</Label>
                        <Input id="rent" type="number" placeholder="800" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Room description..." />
                      </div>
                      <Button className="w-full">Add Room</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button className="w-full" variant="outline">
                  <Receipt className="mr-2 h-4 w-4" />
                  Generate Payment Forms
                </Button>
                <Button className="w-full" variant="outline">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Income Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Rooms Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Room Management</CardTitle>
                <CardDescription>Manage all rooms in this property</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by room number or renter name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedFloor === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFloor("all")}
                >
                  All Floors
                </Button>
                {[1, 2, 3].map((floor) => (
                  <Button
                    key={floor}
                    variant={selectedFloor === floor.toString() ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFloor(floor.toString())}
                  >
                    Floor {floor}
                  </Button>
                ))}
              </div>
            </div>

            {/* Rooms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRooms.map((room) => (
                <Card key={room.id} className="relative">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{room.number}</CardTitle>
                      <Badge variant={getStatusColor(room.status)}>{room.status}</Badge>
                    </div>
                    <CardDescription>
                      Floor {room.floor} • {room.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Monthly Rent:</span>
                        <span className="font-semibold">${room.rent}</span>
                      </div>

                      {room.status === "occupied" && room.renter && (
                        <div className="space-y-2 p-3 bg-gray-50 rounded-lg">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Renter:</span>
                            <span className="font-medium">{room.renter}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Phone:</span>
                            <span className="text-sm">{room.phone}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Move-in:</span>
                            <span className="text-sm">{room.moveInDate}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Edit className="mr-1 h-3 w-3" />
                          Edit
                        </Button>
                        {room.status === "occupied" && (
                          <Button size="sm" variant="outline">
                            <QrCode className="h-3 w-3" />
                          </Button>
                        )}
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
