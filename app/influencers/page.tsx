"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Eye, Filter, Instagram, Youtube, Twitter, Globe, Twitch } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PageContainer } from "@/components/page-container"
import { AnimatedContent } from "@/components/animated-content"
import { InfluencerBanner } from "@/components/influencer-banner"

// Sample data for influencers
const influencers = [
  {
    id: 1,
    name: "Alex Morgan",
    handle: "@techreviewalex",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Tech reviewer and gadget enthusiast with a focus on consumer electronics and smartphones",
    platform: "YouTube",
    icon: Youtube,
    metrics: {
      followers: "850K",
      engagement: "4.2%",
      avgViews: "120K",
    },
    price: 3500,
    priceModel: "per video",
    category: "Technology",
    tags: ["Tech Reviews", "Gadgets", "Unboxing"],
    rating: 4.8,
    reviews: 124,
    verified: true,
  },
  {
    id: 2,
    name: "Sophia Chen",
    handle: "@sophiastyle",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Fashion and lifestyle influencer sharing outfit ideas, beauty tips, and travel experiences",
    platform: "Instagram",
    icon: Instagram,
    metrics: {
      followers: "1.2M",
      engagement: "3.8%",
      avgLikes: "45K",
    },
    price: 2800,
    priceModel: "per post",
    category: "Fashion",
    tags: ["Fashion", "Lifestyle", "Beauty"],
    rating: 4.7,
    reviews: 186,
    verified: true,
  },
  {
    id: 3,
    name: "Marcus Johnson",
    handle: "@fitnesswithmark",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Fitness coach and nutrition expert sharing workout routines, meal plans, and health advice",
    platform: "Instagram",
    icon: Instagram,
    metrics: {
      followers: "650K",
      engagement: "5.1%",
      avgLikes: "32K",
    },
    price: 1800,
    priceModel: "per post",
    category: "Health & Fitness",
    tags: ["Fitness", "Nutrition", "Wellness"],
    rating: 4.9,
    reviews: 92,
    verified: true,
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    handle: "@emilyeats",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Food blogger and recipe creator specializing in easy, healthy meals and baking tutorials",
    platform: "Blog",
    icon: Globe,
    metrics: {
      followers: "420K",
      engagement: "4.5%",
      monthlyViews: "800K",
    },
    price: 1500,
    priceModel: "per article",
    category: "Food & Cooking",
    tags: ["Recipes", "Food", "Cooking"],
    rating: 4.6,
    reviews: 78,
    verified: true,
  },
  {
    id: 5,
    name: "David Kim",
    handle: "@davidgaming",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Gaming streamer and content creator covering new releases, gameplay strategies, and industry news",
    platform: "Twitch",
    icon: Twitch,
    metrics: {
      followers: "950K",
      engagement: "6.2%",
      avgViewers: "15K",
    },
    price: 2200,
    priceModel: "per stream",
    category: "Gaming",
    tags: ["Gaming", "Streaming", "Reviews"],
    rating: 4.7,
    reviews: 103,
    verified: true,
  },
  {
    id: 6,
    name: "Sarah Williams",
    handle: "@sarahfinance",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Financial advisor and educator sharing investment tips, budgeting strategies, and economic insights",
    platform: "Twitter",
    icon: Twitter,
    metrics: {
      followers: "380K",
      engagement: "3.9%",
      avgRetweets: "1.2K",
    },
    price: 1200,
    priceModel: "per thread",
    category: "Finance",
    tags: ["Finance", "Investing", "Money"],
    rating: 4.5,
    reviews: 67,
    verified: true,
  },
  {
    id: 7,
    name: "James Wilson",
    handle: "@travelwithjames",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Travel vlogger documenting adventures around the world with tips on budget travel and hidden gems",
    platform: "YouTube",
    icon: Youtube,
    metrics: {
      followers: "720K",
      engagement: "4.8%",
      avgViews: "95K",
    },
    price: 2500,
    priceModel: "per video",
    category: "Travel",
    tags: ["Travel", "Adventure", "Vlogging"],
    rating: 4.8,
    reviews: 112,
    verified: true,
  },
  {
    id: 8,
    name: "Olivia Parker",
    handle: "@oliviaparenting",
    avatar: "/placeholder.svg?height=100&width=100",
    description:
      "Parenting expert and mom of three sharing advice on child development, education, and family activities",
    platform: "Instagram",
    icon: Instagram,
    metrics: {
      followers: "520K",
      engagement: "5.5%",
      avgLikes: "28K",
    },
    price: 1600,
    priceModel: "per post",
    category: "Parenting",
    tags: ["Parenting", "Family", "Kids"],
    rating: 4.9,
    reviews: 89,
    verified: true,
  },
]

// Categories for filtering
const categories = [
  "All Categories",
  "Technology",
  "Fashion",
  "Health & Fitness",
  "Food & Cooking",
  "Gaming",
  "Finance",
  "Travel",
  "Parenting",
]

// Platform types for filtering
const platformTypes = ["All Platforms", "YouTube", "Instagram", "Twitter", "Blog", "Twitch"]

export default function InfluencersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedPlatform, setSelectedPlatform] = useState("All Platforms")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [filteredInfluencers, setFilteredInfluencers] = useState(influencers)
  const [showFilters, setShowFilters] = useState(false)

  const applyFilters = () => {
    let filtered = influencers

    // Apply search query filter
    if (searchQuery) {
      filtered = filtered.filter(
        (influencer) =>
          influencer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          influencer.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          influencer.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          influencer.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Apply category filter
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter((influencer) => influencer.category === selectedCategory)
    }

    // Apply platform filter
    if (selectedPlatform !== "All Platforms") {
      filtered = filtered.filter((influencer) => influencer.platform === selectedPlatform)
    }

    // Apply price range filter
    filtered = filtered.filter((influencer) => influencer.price >= priceRange[0] && influencer.price <= priceRange[1])

    setFilteredInfluencers(filtered)
  }

  return (
    <div className="min-h-screen bg-[#1E0B4B]">
      <Navbar />
      <div className="flex-1">
        <InfluencerBanner />
        <PageContainer>
          {/* <AnimatedContent>
            <div className="container">
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Influencer Marketing</h1>
                <p className="text-gray-300 mb-8">
                  Connect with top influencers to amplify your brand's reach
                </p>
              </div>
            </div>
          </AnimatedContent> */}
          
          <div className="container py-8">
            {showFilters && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Filters</CardTitle>
                  <CardDescription>Refine your search with these filters</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Platform</label>
                      <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select platform" />
                        </SelectTrigger>
                        <SelectContent>
                          {platformTypes.map((platform) => (
                            <SelectItem key={platform} value={platform}>
                              {platform}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <label className="text-sm font-medium">Price Range</label>
                        <span className="text-sm text-muted-foreground">
                          ${priceRange[0]} - ${priceRange[1]}
                        </span>
                      </div>
                      <Slider
                        defaultValue={[0, 5000]}
                        max={5000}
                        step={100}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("All Categories")
                      setSelectedPlatform("All Platforms")
                      setPriceRange([0, 5000])
                      setFilteredInfluencers(influencers)
                    }}
                  >
                    Reset Filters
                  </Button>
                  <Button onClick={applyFilters}>Apply Filters</Button>
                </CardFooter>
              </Card>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInfluencers.map((influencer) => (
                <Card key={influencer.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline">{influencer.platform}</Badge>
                      <Badge variant="secondary">{influencer.category}</Badge>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <Avatar className="h-16 w-16 border-2 border-primary/10">
                        <AvatarImage src={influencer.avatar} alt={influencer.name} />
                        <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          {influencer.name}
                          {influencer.verified && (
                            <Badge variant="outline" className="h-5 text-xs">
                              Verified
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="text-sm">{influencer.handle}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{influencer.description}</p>

                    <div className="grid grid-cols-3 gap-2 text-sm mb-4">
                      {Object.entries(influencer.metrics).map(([key, value]) => (
                        <div key={key} className="flex flex-col">
                          <span className="text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(influencer.rating) ? "text-yellow-500" : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 15.585l-7.07 3.707 1.35-7.87-5.72-5.573 7.91-1.149L10 0l3.53 7.7 7.91 1.149-5.72 5.573 1.35 7.87L10 15.585z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm font-medium">{influencer.rating}</span>
                      <span className="text-xs text-muted-foreground">({influencer.reviews} reviews)</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {influencer.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t pt-4">
                    <div>
                      <p className="text-sm font-medium">${influencer.price}</p>
                      <p className="text-xs text-muted-foreground">{influencer.priceModel}</p>
                    </div>
                    <Link href={`/influencers/${influencer.id}`}>
                      <Button size="sm" className="gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        View Profile
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredInfluencers.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No influencers found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </PageContainer>
      </div>
      <Footer />
    </div>
  )
}

