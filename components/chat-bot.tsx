"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Mic, Bot, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"

type Message = {
  sender: "user" | "bot"
  content: string
  timestamp: Date
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      content: "Hi! I'm Adsy, your AI shopping assistant. I can help you with:",
      timestamp: new Date()
    },
    {
      sender: "bot",
      content: "• Finding ad spaces and platforms\n• Managing digital purchases\n• Providing market insights\n• Generating performance reports",
      timestamp: new Date()
    }
  ])

  const suggestions = [
    "Find ad spaces for my business",
    "Help me with digital advertising",
    "Show me trending platforms",
    "Generate a performance report"
  ]

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      sender: "user",
      content,
      timestamp: new Date()
    }
    setMessages([...messages, newMessage])
    setMessage("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        sender: "bot",
        content: "I'll help you with that! Let me analyze your request...",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const toggleVoice = () => {
    setIsListening(!isListening)
    // Add voice recognition logic here
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 mb-2"
          >
            <Card className="w-[380px] shadow-xl border-[#2a2e45] bg-[#0f1424]">
              <CardHeader className="border-b border-[#2a2e45] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="h-6 w-6 text-[#9575ff]" />
                    <div>
                      <Link href="/meet-adsy" className="text-lg font-semibold text-white hover:text-[#9575ff] transition-colors">
                        Adsy
                      </Link>
                      <p className="text-xs text-gray-400">AI Shopping Assistant</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-400 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 h-[400px] overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                      <div className={`flex flex-col gap-1 max-w-[280px] ${msg.sender === 'user' ? 'items-end' : ''}`}>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <span className="font-medium">{msg.sender === 'user' ? 'You' : 'Adsy'}</span>
                        </div>
                        <div className={`rounded-lg p-3 text-sm text-white ${
                          msg.sender === 'user' ? 'bg-[#9575ff]' : 'bg-[#1a1e32]'
                        }`}>
                          {msg.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-xs text-gray-400 mb-2">Suggested actions:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSendMessage(suggestion)}
                        className="text-xs bg-[#1a1e32] text-gray-300 px-3 py-1.5 rounded-full hover:bg-[#2a2e45] transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-[#2a2e45] p-4">
                <form 
                  className="flex w-full gap-2"
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (message.trim()) {
                      handleSendMessage(message)
                    }
                  }}
                >
                  <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 bg-[#1a1e32] border-[#2a2e45] text-white"
                  />
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className={`text-gray-400 hover:text-white ${isListening ? 'text-red-500 hover:text-red-600' : ''}`}
                    onClick={toggleVoice}
                  >
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button type="submit" size="icon" className="bg-[#9575ff] hover:bg-[#8a63ff] text-white">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {/* Animated stars */}
        <motion.div
          className="absolute -inset-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="h-3 w-3 text-purple-400" />
          </motion.div>
          <motion.div
            className="absolute -top-1 right-4"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <Sparkles className="h-2 w-2 text-blue-400" />
          </motion.div>
          <motion.div
            className="absolute top-4 -right-1"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            }}
          >
            <Sparkles className="h-2.5 w-2.5 text-green-400" />
          </motion.div>
        </motion.div>

        {/* Main button */}
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 bg-gradient-to-br from-[#140047] to-[#32147f] hover:from-[#1a0066] hover:to-[#3b1a8f] shadow-lg shadow-purple-500/20 cursor-pointer flex items-center justify-center relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(147,51,234,0.1)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center justify-center text-lg font-bold relative">
                <span style={{ color: "#9333EA" }}>A</span>
                <span style={{ color: "#3B82F6" }}>d</span>
                <span style={{ color: "#10B981" }}>s</span>
                <span style={{ color: "#F59E0B" }}>y</span>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
} 