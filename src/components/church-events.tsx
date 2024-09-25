"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, MapPin, Music, Users, Book, Coffee, Heart } from "lucide-react"

export function ChurchEventsComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Participe Conosco</h1>

      <div className="space-y-8">
        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <Image
                src="/about-us.png"
                alt="Culto da Igreja"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl mb-2">
                  <Clock className="mr-2" /> Culto da Igreja
                </CardTitle>
                <CardDescription>Junte-se a nós para adoração, ensino e comunhão</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Horários dos Cultos</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Dia</TableHead>
                          <TableHead>Horário</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Domingo</TableCell>
                          <TableCell>10:00 - 11:30</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Quarta-feira</TableCell>
                          <TableCell>19:00 - 20:30</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Informações</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <MapPin className="mr-2" /> 123 Rua da Igreja, Cidade
                      </li>
                      <li className="flex items-center">
                        <Users className="mr-2" /> Programas para todas as idades
                      </li>
                      <li className="flex items-center">
                        <Book className="mr-2" /> Estudo bíblico aos domingos
                      </li>
                      <li className="flex items-center">
                        <Coffee className="mr-2" /> Café da comunhão após o culto
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Louvor e Adoração</Badge>
                  <Badge variant="secondary">Pregação</Badge>
                  <Badge variant="secondary">Oração</Badge>
                  <Badge variant="secondary">Comunhão</Badge>
                </div>
                <Button className="mt-4">Saiba Mais sobre Nossos Cultos</Button>
              </CardContent>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 md:order-2">
              <Image
                src="/contact.png"
                alt="Chapel Night"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6 md:order-1">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl mb-2">
                  <Music className="mr-2" /> Chapel Night
                </CardTitle>
                <CardDescription>Uma noite especial de adoração e reflexão</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Detalhes do Evento</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Calendar className="mr-2" /> Última sexta-feira do mês
                      </li>
                      <li className="flex items-center">
                        <Clock className="mr-2" /> 20:00 - 22:00
                      </li>
                      <li className="flex items-center">
                        <MapPin className="mr-2" /> Na capela da igreja
                      </li>
                      <li className="flex items-center">
                        <Heart className="mr-2" /> Aberto para todos
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">O que Esperar</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Música acústica de adoração</li>
                      <li>Leituras bíblicas e reflexões</li>
                      <li>Tempo para oração pessoal e em grupo</li>
                      <li>Momentos de silêncio e contemplação</li>
                      <li>Comunhão após o evento com chá e café</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4">
                  Chapel Night é uma oportunidade única para aprofundar sua fé em um ambiente íntimo e reflexivo. Venha
                  experimentar uma noite de paz, renovação espiritual e conexão com Deus e com outros crentes.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Adoração Acústica</Badge>
                  <Badge variant="secondary">Reflexão</Badge>
                  <Badge variant="secondary">Oração</Badge>
                  <Badge variant="secondary">Comunidade</Badge>
                </div>
                <Button className="mt-4">Registre-se para o Próximo Chapel Night</Button>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
