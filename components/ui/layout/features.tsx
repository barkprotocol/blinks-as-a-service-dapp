'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Send, CreditCard, Sparkles, Gift, ShoppingBag, Users, Code, ArrowRight, Repeat } from 'lucide-react'
import { motion } from 'framer-motion'

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, action, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="h-full"
  >
    <Card className="bg-card hover:shadow-lg transition-shadow transform hover:-translate-y-1 flex flex-col h-full border border-border">
      <CardHeader className="p-4">
        <div className="flex items-center space-x-2">
          {icon}
          <CardTitle className="font-inter text-lg font-semibold text-foreground">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="font-poppins font-light text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="outline"
          className="w-full text-sm bg-background text-[#D0BFB4] hover:bg-[#D0BFB4]/10 transition-colors duration-300 rounded-md py-2 px-4 flex items-center justify-between border border-[#D0BFB4]"
          asChild
        >
          <Link href={link}>
            <span>{action}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
)

export const Features: React.FC = () => {
  const features: FeatureCardProps[] = [
    { 
      title: "Create Blinks", 
      description: "Instantly mint and customize Solana Blinks, representing unique digital assets or memorable moments on the blockchain.", 
      icon: <Zap className="h-5 w-5 text-[#D0BFB4]" />,
      action: "Start Creating",
      link: "/blinks/create/"
    },
    { 
      title: "Send Blinks",
      description: "Seamlessly transfer your Blinks to friends, family, or fellow collectors on the Solana network.", 
      icon: <Send className="h-5 w-5 text-[#D0BFB4]" />,
      action: "Send Now",
      link: "/blinks/send-a-gift" 
    },
    { 
      title: "Micro Payments", 
      description: "Facilitate quick and efficient micro transactions using Blinks, perfect for tipping, subscriptions, or small purchases.", 
      icon: <CreditCard className="h-5 w-5 text-[#D0BFB4]" />,
      action: "Start Transacting",
      link: "/blinks/micropayments"
    },
    { 
      title: "Customize Blinks", 
      description: "Make your Blinks truly unique by adding custom attributes, metadata, and visual elements.", 
      icon: <Sparkles className="h-5 w-5 text-[#D0BFB4]" />,
      action: "Customize",
      link: "/blinks/customize"
    },
    { 
      title: "Gift Blinks", 
      description: "Surprise loved ones with special Blinks as thoughtful, digital gifts. Create lasting memories.", 
      icon: <Gift className="h-5 w-5 text-[#D0BFB4]" />,
      action: "Send a Gift",
      link: "/blinks/gift"
    },
    { 
      title: "Blink Commerce", 
      description: "Bridge the digital and physical worlds by creating and selling merchandise tied to unique Blinks.", 
      icon: <ShoppingBag className="h-5 w-5 text-[#D0BFB4]" />,
      action: "Open Shop",
      link: "/blinks/commerce"
    },
    { 
      title: "Crowdfunding", 
      description: "Launch and participate in crowdfunding campaigns using Blinks, supporting innovative projects and ideas.", 
      icon: <Users className="h-5 w-5 text-[#D0BFB4]" />,
      action: "Start Campaign",
      link: "/blinks/crowdfunding"
    },
    {
      title: "BARK Blink API & SDK",
      description: "Integrate BARK Blinks into your own applications with our comprehensive API and SDK.",
      icon: <Code className="h-5 w-5 text-[#D0BFB4]" />,
      action: "Explore Docs",
      link: "/blinks/api"
    },
    {
      title: "Swap NFTs",
      description: "Exchange your Blinks with other users, creating a vibrant marketplace for digital assets.",
      icon: <Repeat className="h-5 w-5 text-[#D0BFB4]" />,
      action: "Start Swapping",
      link: "/blinks/swap"
    }
  ]

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-inter text-4xl sm:text-5xl font-bold mb-2 text-center text-foreground">Blink As A Service</h2>
        <h3 className="font-poppins text-xl sm:text-2xl font-medium mb-4 text-center text-muted-foreground">Unleash the Power of Digital Moments</h3>
        <p className="font-poppins text-base sm:text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          Discover the innovative features of BARK Blinks. Create, customize, and share unique digital assets on the Solana blockchain, opening up a world of possibilities for collectors and creators alike.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}