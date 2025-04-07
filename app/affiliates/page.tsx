"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Eye, Filter } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PageContainer } from "@/components/page-container"
import { AnimatedContent } from "@/components/animated-content"
import { AnimatedBackground } from "@/components/animated-background"

// Sample data for affiliates
const affiliates = [
  {
    id: 1,
    name: "John Smith",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Experienced affiliate marketer specializing in SaaS products and digital marketing tools",
    expertise: "SaaS & Marketing",
    metrics: {
      conversions: "12.5%",
      avgCommission: "$1,200/mo",
      activeClients: "15",
    },
    commissionRate: "15%",
    commissionModel: "of sales",
    category: "Technology",
    tags: ["SaaS", "Marketing Tools", "B2B"],
    rating: 4.9,
    reviews: 87,
    verified: true,
  },
  {
    id: 2,
    name: "Emma Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    description:
      "Finance and investment affiliate with a large audience of young professionals and first-time investors",
    expertise: "Finance & Investing",
    metrics: {
      conversions: "8.7%",
      avgCommission: "$2,500/mo",
      activeClients: "8",
    },
    commissionRate: "12%",
    commissionModel: "of sales",
    category: "Finance",
    tags: ["Investment", "Personal Finance", "Banking"],
    rating: 4.7,
    reviews: 62,
    verified: true,
  },
  {
    id: 3,
    name: "David Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    description:
      "Health and fitness affiliate marketer with a focus on supplements, workout equipment, and nutrition programs",
    expertise: "Health & Fitness",
    metrics: {
      conversions: "10.2%",
      avgCommission: "$1,800/mo",
      activeClients: "12",
    },
    commissionRate: "18%",
    commissionModel: "of sales",
    category: "Health & Fitness",
    tags: ["Supplements", "Fitness", "Nutrition"],
    rating: 4.8,
    reviews: 74,
    verified: true,
  },
  {
    id: 4,
    name: "Sophia Garcia",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Fashion and beauty affiliate with a strong social media presence and high engagement rates",
    expertise: "Fashion & Beauty",
    metrics: {
      conversions: "14.3%",
      avgCommission: "$3,200/mo",
      activeClients: "10",
    },
    commissionRate: "20%",
    commissionModel: "of sales",
    category: "Fashion",
    tags: ["Beauty", "Clothing", "Accessories"],
    rating: 4.9,
    reviews: 93,
    verified: true,
  },
  {
    id: 5,
    name: "Michael Brown",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Travel affiliate specializing in luxury travel packages, hotels, and travel gear",
    expertise: "Travel & Leisure",
    metrics: {
      conversions: "7.8%",
      avgCommission: "$4,500/mo",
      activeClients: "6",
    },
    commissionRate: "10%",
    commissionModel: "of sales",
    category: "Travel",
    tags: ["Luxury Travel", "Hotels", "Travel Gear"],
    rating: 4.6,
    reviews: 58,
    verified: true,
  },
  {
    id: 6,
    name: "Olivia Wilson",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "E-commerce affiliate focusing on home goods, kitchen appliances, and smart home devices",
    expertise: "Home & Kitchen",
    metrics: {
      conversions: "9.5%",
      avgCommission: "$2,100/mo",
      activeClients: "14",
    },
    commissionRate: "15%",
    commissionModel: "of sales",
    category: "Home & Kitchen",
    tags: ["Home Goods", "Appliances", "Smart Home"],
    rating: 4.7,
    reviews: 69,
    verified: true,
  },
  {
    id: 7,
    name: "James Taylor",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Gaming affiliate with expertise in gaming hardware, software, and subscription services",
    expertise: "Gaming & Entertainment",
    metrics: {
      conversions: "11.2%",
      avgCommission: "$2,800/mo",
      activeClients: "9",
    },
    commissionRate: "12%",
    commissionModel: "of sales",
    category: "Gaming",
    tags: ["Gaming Hardware", "Software", "Subscriptions"],
    rating: 4.8,
    reviews: 81,
    verified: true,
  },
  {
    id: 8,
    name: "Ava Martinez",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Education affiliate specializing in online courses, educational software, and learning resources",
    expertise: "Education & Learning",
    metrics: {
      conversions: "13.7%",
      avgCommission: "$1,900/mo",
      activeClients: "11",
    },
    commissionRate: "25%",
    commissionModel: "of sales",
    category: "Education",
    tags: ["Online Courses", "Educational Software", "Learning"],
    rating: 4.9,
    reviews: 76,
    verified: true,
  },
]

// Categories for filtering
const categories = [
  "All Categories",
  "Technology",
  "Finance",
  "Health & Fitness",
  "Fashion",
  "Travel",
  "Home & Kitchen",
  "Gaming",
  "Education",
]

export default function AffiliatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [commissionRange, setCommissionRange] = useState([0, 30])
  const [filteredAffiliates, setFilteredAffiliates] = useState(affiliates)
  const [showFilters, setShowFilters] = useState(false)

  const applyFilters = () => {
    let filtered = affiliates

    // Apply search query filter
    if (searchQuery) {
      filtered = filtered.filter(
        (affiliate) =>
          affiliate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          affiliate.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          affiliate.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Apply category filter
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter((affiliate) => affiliate.category === selectedCategory)
    }

    // Apply commission range filter
    filtered = filtered.filter((affiliate) => {
      const rate = Number.parseInt(affiliate.commissionRate)
      return rate >= commissionRange[0] && rate <= commissionRange[1]
    })

    setFilteredAffiliates(filtered)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0F0817]">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="flex-1">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 items-center pt-24 md:pt-28 lg:pt-32">
              <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Affiliate Program
                </h1>
                <p className="text-lg text-white/70">
                  Join our affiliate network and earn commissions by promoting our platform
                </p>
              </div>

              <div className="flex flex-wrap gap-4 items-center justify-center w-full max-w-2xl">
                <div className="flex-1 min-w-[240px] max-w-sm">
                  <Input
                    placeholder="Search affiliates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-10 bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  />
                </div>
                <Button 
                  onClick={applyFilters} 
                  className="h-10 bg-purple-600 text-white hover:bg-purple-700"
                >
                  Search
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="h-10 border-white/10 text-white hover:bg-white/5 gap-2"
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>

              {showFilters && (
                <Card className="bg-white/5 border-white/10 w-full max-w-2xl">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Category</label>
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1A0B2E] border-white/10">
                            {categories.map((category) => (
                              <SelectItem 
                                key={category} 
                                value={category}
                                className="text-white hover:bg-white/5"
                              >
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium text-white">Commission Rate</label>
                          <span className="text-sm text-white/70">
                            {commissionRange[0]}% - {commissionRange[1]}%
                          </span>
                        </div>
                        <Slider
                          defaultValue={[0, 30]}
                          max={30}
                          step={1}
                          value={commissionRange}
                          onValueChange={setCommissionRange}
                          className="py-4"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {filteredAffiliates.map((affiliate) => (
                  <Card key={affiliate.id} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border border-white/10">
                          <AvatarImage src={affiliate.avatar} />
                          <AvatarFallback className="bg-white/5 text-white">
                            {affiliate.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg text-white">
                              {affiliate.name}
                            </CardTitle>
                            {affiliate.verified && (
                              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="text-white/70">{affiliate.expertise}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-white/70 mb-4">{affiliate.description}</p>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm text-white/70">Conversions</div>
                          <div className="text-lg font-semibold text-white">{affiliate.metrics.conversions}</div>
                        </div>
                        <div>
                          <div className="text-sm text-white/70">Commission</div>
                          <div className="text-lg font-semibold text-white">{affiliate.metrics.avgCommission}</div>
                        </div>
                        <div>
                          <div className="text-sm text-white/70">Active</div>
                          <div className="text-lg font-semibold text-white">{affiliate.metrics.activeClients}</div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`h-4 w-4 ${
                                star <= affiliate.rating ? "text-purple-400" : "text-white/20"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-white/70">
                          ({affiliate.reviews})
                        </span>
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-purple-600 text-white hover:bg-purple-700"
                      >
                        View Profile
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {filteredAffiliates.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2 text-white">No affiliates found</h3>
                  <p className="text-white/70">Try adjusting your filters or search query</p>
                </div>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

