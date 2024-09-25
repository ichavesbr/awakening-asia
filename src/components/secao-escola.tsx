'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Calendar, MapPin } from "lucide-react"

export function SecaoEscola() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Escola da Igreja São João</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-600">
          Educação de qualidade com valores cristãos para formar líderes do futuro.
          Nossa escola oferece um ambiente acolhedor e programas educacionais excepcionais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader>
              <BookOpen className="w-10 h-10 text-blue-600 mb-2" />
              <CardTitle>Currículo Cristão</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Integramos valores cristãos em todas as disciplinas, proporcionando uma educação holística.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-10 h-10 text-blue-600 mb-2" />
              <CardTitle>Turmas Pequenas</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Garantimos atenção individualizada com turmas reduzidas e professores dedicados.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Calendar className="w-10 h-10 text-blue-600 mb-2" />
              <CardTitle>Atividades Extracurriculares</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Oferecemos uma variedade de atividades para desenvolvimento integral dos alunos.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MapPin className="w-10 h-10 text-blue-600 mb-2" />
              <CardTitle>Localização Central</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Fácil acesso no coração da comunidade, próximo às principais vias da cidade.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 text-blue-800">Matrículas Abertas</h3>
          <p className="mb-6 text-gray-600">Garanta uma vaga para seu filho em nossa escola. Venha nos conhecer!</p>
          <div className="space-x-4">
            <Button size="lg">Agende uma Visita</Button>
            <Button size="lg" variant="outline">Saiba Mais</Button>
          </div>
        </div>
      </div>
    </section>
  )
}