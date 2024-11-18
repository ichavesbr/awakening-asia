"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Check, Smartphone } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaypal } from "@fortawesome/free-brands-svg-icons"
import { faBuildingColumns, faCreditCard } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export function DonationCards() {
  const [buttonText, setButtonText] = useState("Copy Bank Details")

  const handleClick = () => {
    const textToCopy = `金融機関：住信SBIネット銀行（0038）
支　　店：法人第一支店（106）
科　　目：普通
口座番号：1956105
口座名義：シャ）アウェイクニングアジア`

    navigator.clipboard.writeText(textToCopy)
    setButtonText("Copied!")
    setTimeout(() => setButtonText("Copy Bank Details"), 2000)
  }

  return (
    <section className="about">
      <p className="text-3xl font-bold text-center mb-8">OFFERING TO THE MINISTRY</p>
      <div className="section-wrapper !block">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="flex flex-col">
            <CardHeader className="text-center">
              <FontAwesomeIcon icon={faCreditCard} size="3x" className="pb-4" />
              <CardTitle className="uppercase">CREDIT CARD</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="mb-4">
                Securely donate using your credit card. Fast and convenient.
              </CardDescription>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>VISA</span>
                </li>
                <li className="flex items-center">
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>MasterCard</span>
                </li>
                <li className="flex items-center">
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Discover</span>
                </li>
                <li className="flex items-center">
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>AMEX</span>
                </li>
                <li className="flex items-center">
                  <Smartphone className="mr-2 h-4 w-4" />
                  <span>Google Pay</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="https://tithe.ly/give?c=2886012" target="_blank" rel="noopener noreferrer" className="mx-auto">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Donate with Card</Button>
              </a>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader className="text-center">
              <FontAwesomeIcon icon={faPaypal} size="3x" className="pb-4" />
              <CardTitle className="uppercase">PAYPAL</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="mb-4">
                Use your PayPal account for a quick and easy donation process.
              </CardDescription>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                  <span>Fast and secure</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                  <span>No account needed</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                  <span>International payments</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a
                href="https://www.paypal.com/paypalme/awakeningasia"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Donate with PayPal</Button>
              </a>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader className="text-center">
              <FontAwesomeIcon icon={faBuildingColumns} size="3x" className="pb-4" />
              <CardTitle className="uppercase">BANK TRANSFER</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="mb-4">Make a direct bank transfer to support our ministry.</CardDescription>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>金融機関：</strong>住信SBIネット銀行（0038）
                </li>
                <li>
                  <strong>支　　店：</strong>法人第一支店（106）
                </li>
                <li>
                  <strong>科　　目：</strong>普通
                </li>
                <li>
                  <strong>口座番号：</strong>1956105
                </li>
                <li>
                  <strong>口座名義：</strong>シャ）アウェイクニングアジア
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="mx-auto bg-yellow-500 hover:bg-yellow-600 text-black" onClick={handleClick}>
                {buttonText}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
