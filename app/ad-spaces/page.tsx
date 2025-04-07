"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Eye, Filter, Globe, Mail, MessageSquare, Users } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedContent } from "@/components/animated-content"
import { AnimatedList } from "@/components/animated-list"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedInput } from "@/components/animated-input"
import { motion } from "framer-motion"
import { PageContainer } from "@/components/page-container"
import { Button } from "@/components/ui/button"
import { AnimatedBanner } from "@/components/animated-banner"

// Sample data for ad spaces
const adSpaces = [
  {
    id: 1,
    title: "Tech Blog Premium Banner",
    description: "Top banner position on a tech blog with 500K monthly visitors",
    type: "Website",
    icon: Globe,
    metrics: {
      visitors: "500K",
      impressions: "2.5M",
      ctr: "3.2%",
    },
    price: 1200,
    priceModel: "per month",
    category: "Technology",
    tags: ["Banner", "Tech", "Premium"],
  },
  {
    id: 2,
    title: "Weekly Finance Newsletter",
    description: "Sponsored section in a finance newsletter with 50K subscribers",
    type: "Newsletter",
    icon: Mail,
    metrics: {
      subscribers: "50K",
      openRate: "32%",
      clickRate: "8.5%",
    },
    price: 800,
    priceModel: "per issue",
    category: "Finance",
    tags: ["Newsletter", "Finance", "Weekly"],
  },
  {
    id: 3,
    title: "Fitness App In-App Ads",
    description: "Native in-app advertisements in a fitness app with 200K active users",
    type: "Mobile App",
    icon: MessageSquare,
    metrics: {
      users: "200K",
      sessions: "1.2M",
      engagement: "4.5 min",
    },
    price: 1500,
    priceModel: "per week",
    category: "Health & Fitness",
    tags: ["Mobile", "In-App", "Fitness"],
  },
  {
    id: 4,
    title: "Travel Influencer Promotion",
    description: "Sponsored content from a travel influencer with 350K followers",
    type: "Social Media",
    icon: Users,
    metrics: {
      followers: "350K",
      engagement: "4.8%",
      reach: "120K",
    },
    price: 2000,
    priceModel: "per post",
    category: "Travel",
    tags: ["Influencer", "Social Media", "Travel"],
  },
  {
    id: 5,
    title: "Food Blog Sidebar Ad",
    description: "Sidebar advertisement on a popular food blog with 300K monthly visitors",
    type: "Website",
    icon: Globe,
    metrics: {
      visitors: "300K",
      impressions: "1.2M",
      ctr: "2.8%",
    },
    price: 750,
    priceModel: "per month",
    category: "Food & Cooking",
    tags: ["Sidebar", "Food", "Blog"],
  },
  {
    id: 6,
    title: "Gaming YouTube Channel",
    description: "Pre-roll ad on a gaming YouTube channel with 1M subscribers",
    type: "Video",
    icon: Users,
    metrics: {
      subscribers: "1M",
      views: "500K",
      watchTime: "3.2 min",
    },
    price: 3000,
    priceModel: "per video",
    category: "Gaming",
    tags: ["YouTube", "Gaming", "Video"],
  },
  {
    id: 7,
    title: "Business Podcast Sponsorship",
    description: "60-second ad spot on a business podcast with 100K weekly listeners",
    type: "Podcast",
    icon: MessageSquare,
    metrics: {
      listeners: "100K",
      downloads: "80K",
      completion: "92%",
    },
    price: 1800,
    priceModel: "per episode",
    category: "Business",
    tags: ["Podcast", "Business", "Audio"],
  },
  {
    id: 8,
    title: "Fashion Instagram Promotion",
    description: "Sponsored post on a fashion Instagram account with 500K followers",
    type: "Social Media",
    icon: Users,
    metrics: {
      followers: "500K",
      engagement: "5.2%",
      reach: "200K",
    },
    price: 2500,
    priceModel: "per post",
    category: "Fashion",
    tags: ["Instagram", "Fashion", "Social Media"],
  },
]

// Categories for filtering
const categories = [
  "All Categories",
  "Technology",
  "Finance",
  "Health & Fitness",
  "Travel",
  "Food & Cooking",
  "Gaming",
  "Business",
  "Fashion",
]

// Platform types for filtering
const platformTypes = ["All Types", "Website", "Newsletter", "Mobile App", "Social Media", "Video", "Podcast"]

export default function AdSpacesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedType, setSelectedType] = useState("All Types")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [filteredSpaces, setFilteredSpaces] = useState(adSpaces)
  const [showFilters, setShowFilters] = useState(false)

  const applyFilters = () => {
    let filtered = adSpaces

    // Apply search query filter
    if (searchQuery) {
      filtered = filtered.filter(
        (space) =>
          space.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          space.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          space.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Apply category filter
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter((space) => space.category === selectedCategory)
    }

    // Apply type filter
    if (selectedType !== "All Types") {
      filtered = filtered.filter((space) => space.type === selectedType)
    }

    // Apply price range filter
    filtered = filtered.filter((space) => space.price >= priceRange[0] && space.price <= priceRange[1])

    setFilteredSpaces(filtered)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <AnimatedBanner />
        <PageContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="container -mt-20 relative z-10"
          >
            <div className="flex justify-center gap-2 mt-8">
              <AnimatedInput
                placeholder="Search ad platforms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-lg"
              />
              <AnimatedButton onClick={applyFilters} variant="primary-gradient" hoverScale={1.02} sweep={true}>
                Search
              </AnimatedButton>
              <AnimatedButton
                variant="ghost-primary"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
                shimmer={true}
              >
                <Filter className="h-4 w-4" />
                Filters
              </AnimatedButton>
            </div>
          </motion.div>

          <div className="container py-8">
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: showFilters ? 1 : 0,
                height: showFilters ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
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
                        <label className="text-sm font-medium">Platform Type</label>
                        <Select value={selectedType} onValueChange={setSelectedType}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            {platformTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
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
                    <AnimatedButton
                      variant="ghost-primary"
                      className="border-primary/30 hover:border-primary/60"
                      onClick={() => {
                        setSearchQuery("")
                        setSelectedCategory("All Categories")
                        setSelectedType("All Types")
                        setPriceRange([0, 5000])
                        setFilteredSpaces(adSpaces)
                      }}
                      shimmer={true}
                    >
                      Reset Filters
                    </AnimatedButton>
                    <AnimatedButton onClick={applyFilters} variant="primary-gradient" sweep={true}>
                      Apply Filters
                    </AnimatedButton>
                  </CardFooter>
                </Card>
              )}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredSpaces.map((space) => (
                <Card key={space.id} href={`/ad-spaces/${space.id}`}>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{space.type}</Badge>
                      <Badge variant="secondary">{space.category}</Badge>
                    </div>
                    <CardTitle>{space.title}</CardTitle>
                    <CardDescription>{space.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(space.metrics).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                          <p className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </p>
                          <p className="font-medium">{value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-bold">${space.price}</p>
                      <p className="text-sm text-muted-foreground">{space.priceModel}</p>
                    </div>
                    <Button variant="ghost-primary" size="sm">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredSpaces.length === 0 && (
              <AnimatedContent className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No ad spaces found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query</p>
              </AnimatedContent>
            )}
          </div>
        </PageContainer>
      </div>
      <Footer />
    </div>
  )
}

