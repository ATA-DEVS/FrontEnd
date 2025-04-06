"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  BarChart2,
  Calendar,
  Check,
  Clock,
  DollarSign,
  Eye,
  Globe,
  Heart,
  Mail,
  MessageSquare,
  Share2,
  ShieldCheck,
  Star,
} from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// This would normally come from a database
const adSpace = {
  id: 1,
  title: "Tech Blog Premium Banner",
  description:
    "Top banner position on a tech blog with 500K monthly visitors. This premium placement offers excellent visibility and engagement for tech-related products and services. The banner is displayed at the top of every page on the website, ensuring maximum exposure to our highly engaged tech audience.",
  type: "Website",
  icon: Globe,
  metrics: {
    visitors: "500K monthly",
    pageviews: "2.5M monthly",
    uniqueVisitors: "350K monthly",
    averageTimeOnPage: "3:45 minutes",
    bounceRate: "32%",
    ctr: "3.2% average",
  },
  price: "$1,200",
  priceModel: "per month",
  category: "Technology",
  tags: ["Banner", "Tech", "Premium", "Top Position"],
  specifications: {
    dimensions: "728x90 pixels (desktop), 320x50 pixels (mobile)",
    fileTypes: "JPG, PNG, GIF (static or animated), HTML5",
    maxFileSize: "150KB",
    targeting: "Tech enthusiasts, developers, IT professionals",
    placement: "Top of page, above the fold",
    devices: "Desktop and mobile",
  },
  owner: {
    name: "TechInsider Blog",
    memberSince: "March 2020",
    responseRate: "98%",
    responseTime: "Under 2 hours",
    rating: 4.8,
    totalReviews: 156,
    verified: true,
  },
  reviews: [
    {
      id: 1,
      author: "Sarah Johnson",
      company: "DevTools Pro",
      rating: 5,
      date: "August 15, 2023",
      content:
        "Excellent ad placement with great results. We saw a 40% increase in traffic to our landing page and a 15% conversion rate. Will definitely use again for our next campaign.",
    },
    {
      id: 2,
      author: "Michael Chen",
      company: "CloudStack",
      rating: 4,
      date: "July 3, 2023",
      content:
        "Good visibility and decent CTR. The audience is very relevant for our B2B SaaS product. The only reason for 4 stars instead of 5 is that we had to make several revisions to our banner to meet their guidelines.",
    },
    {
      id: 3,
      author: "Jessica Williams",
      company: "CodeAcademy Plus",
      rating: 5,
      date: "June 22, 2023",
      content:
        "Perfect placement for our coding courses. The tech audience is exactly who we wanted to reach, and the engagement metrics exceeded our expectations. The owner was also very responsive and helpful.",
    },
  ],
  faqs: [
    {
      question: "What is the typical audience demographic?",
      answer:
        "Our audience is primarily tech professionals aged 25-45, with 70% male and 30% female. Most visitors are from the US (60%), followed by Europe (25%) and Asia (10%).",
    },
    {
      question: "How long does it take to approve an ad?",
      answer:
        "We typically review and approve ads within 24-48 hours. For faster approval, ensure your ad meets our guidelines before submission.",
    },
    {
      question: "Can I target specific sections of the blog?",
      answer:
        "Yes, we offer section-specific targeting for an additional fee. You can choose to display your ad only on specific categories like AI, Web Development, or Cybersecurity.",
    },
    {
      question: "Do you offer discounts for longer commitments?",
      answer: "Yes, we offer 10% discount for 3-month commitments and 15% for 6-month commitments.",
    },
  ],
}

export default function AdSpaceDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-6">
            <Link
              href="/ad-spaces"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to ad spaces
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{adSpace.type}</Badge>
                    <Badge variant="secondary">{adSpace.category}</Badge>
                  </div>
                  <h1 className="text-3xl font-bold mb-2">{adSpace.title}</h1>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span>{adSpace.owner.rating}</span>
                      <span className="mx-1">•</span>
                      <span>{adSpace.owner.totalReviews} reviews</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>500+ views this week</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Ad space preview</p>
                </div>
              </div>

              <Tabs defaultValue="description">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="faqs">FAQs</TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="pt-6">
                  <div className="space-y-4">
                    <p>{adSpace.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                      {Object.entries(adSpace.metrics).map(([key, value]) => (
                        <div key={key} className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </p>
                          <p className="font-medium">{value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4">
                      <h3 className="font-medium mb-2">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {adSpace.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="specifications" className="pt-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(adSpace.specifications).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                          <p className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </p>
                          <p className="font-medium">{value}</p>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-4">Requirements & Guidelines</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>
                            All ads must comply with our content guidelines (no adult content, gambling, etc.)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>Ads should be relevant to our tech audience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>Maximum of 3 frames for animated GIFs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>Landing pages must be secure (HTTPS)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-muted/50 p-4 rounded-lg text-center">
                        <p className="text-3xl font-bold">{adSpace.owner.rating}</p>
                        <div className="flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(adSpace.owner.rating) ? "text-yellow-500" : "text-muted"}`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{adSpace.owner.totalReviews} reviews</p>
                      </div>
                      <div className="flex-1">
                        <div className="space-y-1">
                          {[5, 4, 3, 2, 1].map((rating) => {
                            const percentage =
                              rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : rating === 2 ? 2 : 1
                            return (
                              <div key={rating} className="flex items-center gap-2">
                                <div className="flex items-center">
                                  <span className="text-sm w-3">{rating}</span>
                                  <Star className="h-3 w-3 text-yellow-500 ml-1" />
                                </div>
                                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                  <div
                                    className="bg-yellow-500 h-full rounded-full"
                                    style={{ width: `${percentage}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs text-muted-foreground">{percentage}%</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-6">
                      {adSpace.reviews.map((review) => (
                        <div key={review.id} className="space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">{review.author}</p>
                              <p className="text-sm text-muted-foreground">{review.company}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < review.rating ? "text-yellow-500" : "text-muted"}`}
                                  />
                                ))}
                              </div>
                              <p className="text-xs text-muted-foreground">{review.date}</p>
                            </div>
                          </div>
                          <p className="text-sm">{review.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="faqs" className="pt-6">
                  <div className="space-y-6">
                    {adSpace.faqs.map((faq, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="font-medium">{faq.question}</h3>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                        {index < adSpace.faqs.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Book This Ad Space</CardTitle>
                  <CardDescription>Secure this premium placement for your campaign</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-bold">{adSpace.price}</p>
                      <p className="text-sm text-muted-foreground">{adSpace.priceModel}</p>
                    </div>
                    <Button className="gap-2" variant="primary-gradient">
                      <DollarSign className="h-4 w-4" />
                      Book Now
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Available starting next week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Average approval time: 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Performance reports included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Secure payment & satisfaction guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>About the Advertiser</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{adSpace.owner.name}</p>
                        {adSpace.owner.verified && (
                          <Badge variant="outline" className="text-xs gap-1">
                            <Check className="h-3 w-3" /> Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">Member since {adSpace.owner.memberSince}</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Response Rate</p>
                      <p className="font-medium">{adSpace.owner.responseRate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Response Time</p>
                      <p className="font-medium">{adSpace.owner.responseTime}</p>
                    </div>
                  </div>

                  <Button variant="ghost-primary" className="w-full">
                    Contact Advertiser
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Similar Ad Spaces</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted/50 p-2 rounded-lg">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">Tech News Sidebar Banner</p>
                      <p className="text-sm text-muted-foreground">$950 per month</p>
                    </div>
                    <Button variant="ghost-primary" size="sm" className="shrink-0">
                      View
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <div className="bg-muted/50 p-2 rounded-lg">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">Developer Newsletter</p>
                      <p className="text-sm text-muted-foreground">$800 per issue</p>
                    </div>
                    <Button variant="ghost-primary" size="sm" className="shrink-0">
                      View
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <div className="bg-muted/50 p-2 rounded-lg">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">Tech Podcast Sponsorship</p>
                      <p className="text-sm text-muted-foreground">$1,500 per episode</p>
                    </div>
                    <Button variant="ghost-primary" size="sm" className="shrink-0">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

