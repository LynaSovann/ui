"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, MapPin, Star, Heart, Wifi, Car, Shield, Dumbbell, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

export default function PropertyDetailPage() {
  const params = useParams()
  const [selectedRoom, setSelectedRoom] = useState<any>(null)

  // Mock property data
  const property = {
    id: 1,
    name: "Sunset Villa Apartments",
    location: "Downtown District, City Center",
    description:
      "Modern apartment complex with excellent amenities and prime location. Perfect for students and young professionals.",
    rating: 4.8,
    totalReviews: 124,
    floors: 3,
    totalRooms: 24,
    availableRooms: 2,
    amenities: [
      { icon: Wifi, name: "High-Speed WiFi" },
      { icon: Car, name: "Parking" },
      { icon: Shield, name: "24/7 Security" },
      { icon: Dumbbell, name: "Fitness Center" },
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    owner: {
      name: "John Anderson",
      phone: "+1 (555) 123-4567",
      email: "john@sunsetvilla.com",
      joinedDate: "2020",
    },
  }

  // Mock available rooms
  const availableRooms = [
    {
      id: 1,
      number: "A-102",
      floor: 1,
      type: "1 Bedroom",
      size: "45 sqm",
      rent: 950,
      deposit: 1900,
      features: ["Private bathroom", "Balcony", "Air conditioning", "Furnished"],
      images: ["/placeholder.svg?height=300&width=400"],
    },
    {
      id: 2,
      number: "B-205",
      floor: 2,
      type: "Studio",
      size: "35 sqm",
      rent: 800,
      deposit: 1600,
      features: ["Private bathroom", "Kitchenette", "Air conditioning"],
      images: ["/placeholder.svg?height=300&width=400"],
    },
  ]

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2024-01-10",
      comment: "Great location and excellent facilities. The owner is very responsive and helpful.",
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 4,
      date: "2024-01-05",
      comment: "Clean and well-maintained property. Good value for money in this area.",
    },
    {
      id: 3,
      name: "Emma Davis",
      rating: 5,
      date: "2023-12-28",
      comment: "Love living here! The amenities are great and the community is friendly.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" asChild>
            <Link href="/dashboard/user">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Browse
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" size="sm">
              Share
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Property Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{property.rating}</span>
                  <span>({property.totalReviews} reviews)</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Starting from</div>
              <div className="text-3xl font-bold text-blue-600">$800</div>
              <div className="text-sm text-gray-600">per month</div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-4 gap-2 h-96">
            <div className="col-span-2 row-span-2">
              <Image
                src={property.images[0] || "/placeholder.svg"}
                alt={property.name}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-2">
              {property.images.slice(1).map((image, index) => (
                <Image
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${property.name} ${index + 2}`}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{property.floors}</div>
                    <div className="text-sm text-gray-600">Floors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{property.totalRooms}</div>
                    <div className="text-sm text-gray-600">Total Rooms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{property.availableRooms}</div>
                    <div className="text-sm text-gray-600">Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">{property.rating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <amenity.icon className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Available Rooms */}
            <Card>
              <CardHeader>
                <CardTitle>Available Rooms ({property.availableRooms})</CardTitle>
                <CardDescription>Choose from our available rooms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availableRooms.map((room) => (
                    <div key={room.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4">
                        <div className="w-24 h-16 bg-gray-200 rounded-lg overflow-hidden">
                          <img
                            src={room.images[0] || "/placeholder.svg"}
                            alt={`Room ${room.number}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">Room {room.number}</h3>
                            <div className="text-right">
                              <div className="text-xl font-bold text-blue-600">${room.rent}</div>
                              <div className="text-sm text-gray-600">per month</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <span>Floor {room.floor}</span>
                            <span>{room.type}</span>
                            <span>{room.size}</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {room.features.slice(0, 3).map((feature, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                            {room.features.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{room.features.length - 3} more
                              </Badge>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="outline" onClick={() => setSelectedRoom(room)}>
                                  View Details
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Room {room.number} Details</DialogTitle>
                                  <DialogDescription>
                                    {room.type} • Floor {room.floor} • {room.size}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div className="aspect-video bg-gray-200 rounded-lg">
                                    <img
                                      src={room.images[0] || "/placeholder.svg"}
                                      alt={`Room ${room.number}`}
                                      className="w-full h-full object-cover rounded-lg"
                                    />
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <h4 className="font-medium mb-2">Monthly Rent</h4>
                                      <p className="text-2xl font-bold text-blue-600">${room.rent}</p>
                                    </div>
                                    <div>
                                      <h4 className="font-medium mb-2">Security Deposit</h4>
                                      <p className="text-xl font-semibold">${room.deposit}</p>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-2">Features</h4>
                                    <div className="flex flex-wrap gap-2">
                                      {room.features.map((feature, index) => (
                                        <Badge key={index} variant="outline">
                                          {feature}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm">Book Now</Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Book Room {room.number}</DialogTitle>
                                  <DialogDescription>Fill out the form below to request a booking</DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="moveInDate">Preferred Move-in Date</Label>
                                    <Input id="moveInDate" type="date" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="duration">Rental Duration</Label>
                                    <Input id="duration" placeholder="e.g., 12 months" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="message">Message to Owner</Label>
                                    <Textarea
                                      id="message"
                                      placeholder="Tell the owner about yourself and why you're interested in this room..."
                                      rows={4}
                                    />
                                  </div>
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-medium mb-2">Booking Summary</h4>
                                    <div className="space-y-1 text-sm">
                                      <div className="flex justify-between">
                                        <span>Monthly Rent:</span>
                                        <span>${room.rent}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span>Security Deposit:</span>
                                        <span>${room.deposit}</span>
                                      </div>
                                      <div className="flex justify-between font-semibold border-t pt-1">
                                        <span>Total Initial Payment:</span>
                                        <span>${room.rent + room.deposit}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <Button className="w-full">Submit Booking Request</Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews ({property.totalReviews})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-blue-600">{review.name.charAt(0)}</span>
                          </div>
                          <span className="font-medium">{review.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Owner Info */}
            <Card>
              <CardHeader>
                <CardTitle>Property Owner</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-lg font-medium text-blue-600">{property.owner.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{property.owner.name}</h3>
                      <p className="text-sm text-gray-600">Owner since {property.owner.joinedDate}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span>{property.owner.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span>{property.owner.email}</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Contact Owner
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Property Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Floors:</span>
                    <span className="font-semibold">{property.floors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Rooms:</span>
                    <span className="font-semibold">{property.totalRooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available Now:</span>
                    <span className="font-semibold text-green-600">{property.availableRooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Rating:</span>
                    <span className="font-semibold">{property.rating}/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Interactive map would be here</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{property.location}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
