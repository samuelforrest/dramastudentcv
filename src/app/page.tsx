import { motion } from "framer-motion";
import React from "react";

'use client';
import { motion } from "framer-motion";
import { Rocket, CheckCircle, ArrowRight, Twitter, Linkedin, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const LandingPage: React.FC = () => {
  return (
    <main className="font-serif bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="py-16 md:py-20">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight leading-tight">
              Alex Morgan
            </h1>
            <Badge className="mb-4 bg-fuchsia-200 text-fuchsia-800 text-base px-4 py-1 rounded-full">
              Drama Student
            </Badge>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Passionate about storytelling, performance, and the transformative power of the stage. Dreaming big, daring boldly, and living for the applause.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-to-r from-fuchsia-400 to-blue-400 text-white shadow-lg hover:from-fuchsia-500 hover:to-blue-500">
                <ArrowRight className="mr-2 w-5 h-5" /> View Portfolio
              </Button>
              <Button variant="outline" size="lg">
                <Rocket className="mr-2 w-5 h-5 text-fuchsia-500" /> Let's Connect
              </Button>
            </div>
            <div className="flex gap-3 mt-8">
              <a href="https://twitter.com" target="_blank" rel="noopener">
                <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-600 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener">
                <Linkedin className="w-6 h-6 text-blue-700 hover:text-blue-900 transition" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener">
                <Github className="w-6 h-6 text-gray-700 hover:text-black transition" />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <Avatar className="w-44 h-44 shadow-xl ring-4 ring-fuchsia-200">
              <AvatarImage src="https://randomuser.me/api/portraits/women/65.jpg" alt="Alex Morgan" />
              <AvatarFallback className="text-4xl bg-fuchsia-300 text-white">AM</AvatarFallback>
            </Avatar>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-purple-700 mb-4">About Me</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Hi! I'm Alex, a 21-year-old drama student based in London. I thrive in the limelight, whether it's improvisational theatre, Shakespearean classics, or devising new works. My journey is fueled by curiosity, empathy, and a love for collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <Badge className="bg-fuchsia-200 text-fuchsia-800">Improvisation</Badge>
              <Badge className="bg-blue-200 text-blue-800">Script Analysis</Badge>
              <Badge className="bg-purple-200 text-purple-800">Movement</Badge>
              <Badge className="bg-green-200 text-green-800">Vocal Training</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-purple-700 mb-8 text-center">Experience</h2>
            <Tabs defaultValue="theatre" className="max-w-2xl mx-auto">
              <TabsList className="flex justify-center gap-2">
                <TabsTrigger value="theatre">Theatre</TabsTrigger>
                <TabsTrigger value="film">Film</TabsTrigger>
                <TabsTrigger value="awards">Awards</TabsTrigger>
              </TabsList>
              <TabsContent value="theatre">
                <div className="space-y-5 mt-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-fuchsia-500" />
                      <span className="font-semibold text-lg">Juliet, <span className="italic">Romeo & Juliet</span></span>
                    </CardHeader>
                    <CardContent className="text-gray-700">
                      King's Theatre, London · Spring 2024<br />
                      Brought youthful passion and vulnerability to a modern retelling of Shakespeare's classic.
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-500" />
                      <span className="font-semibold text-lg">Lead, <span className="italic">The Improvised Hour</span></span>
                    </CardHeader>
                    <CardContent className="text-gray-700">
                      Improv Collective · 2023<br />
                      Starred in weekly unscripted performances, embracing spontaneity and quick wit.
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="film">
                <div className="space-y-5 mt-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-500" />
                      <span className="font-semibold text-lg">Maya, <span className="italic">Fragments</span></span>
                    </CardHeader>
                    <CardContent className="text-gray-700">
                      Student Short Film · 2023<br />
                      Explored themes of loss and hope in a nuanced lead performance.
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="awards">
                <div className="space-y-5 mt-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="font-semibold text-lg">Best New Performer</span>
                    </CardHeader>
                    <CardContent className="text-gray-700">
                      London Youth Theatre Awards · 2024
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-fuchsia-500" />
                      <span className="font-semibold text-lg">Audience Choice Award</span>
                    </CardHeader>
                    <CardContent className="text-gray-700">
                      King's Theatre Festival · 2023
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-20 bg-gradient-to-r from-purple-50 via-fuchsia-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-purple-700 mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="flex flex-col items-center py-6">
                <Rocket className="w-8 h-8 text-fuchsia-400 mb-2" />
                <span className="font-medium text-lg">Stage Presence</span>
              </Card>
              <Card className="flex flex-col items-center py-6">
                <CheckCircle className="w-8 h-8 text-blue-400 mb-2" />
                <span className="font-medium text-lg">Improvisation</span>
              </Card>
              <Card className="flex flex-col items-center py-6">
                <CheckCircle className="w-8 h-8 text-purple-400 mb-2" />
                <span className="font-medium text-lg">Physical Theatre</span>
              </Card>
              <Card className="flex flex-col items-center py-6">
                <CheckCircle className="w-8 h-8 text-green-400 mb-2" />
                <span className="font-medium text-lg">Voice Acting</span>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-purple-700 mb-8 text-center">Education</h2>
            <Card>
              <CardHeader>
                <span className="font-semibold text-lg">BA (Hons) Drama & Theatre Arts</span>
              </CardHeader>
              <CardContent className="text-gray-700">
                University of London<br />
                <span className="text-sm text-gray-500">2021 – 2024 (Expected)</span>
                <ul className="list-disc ml-6 mt-3 text-base">
                  <li>First Class Honors (Expected)</li>
                  <li>Specialized in Acting & Devised Theatre</li>
                  <li>Member, University Drama Society</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 bg-gradient-to-l from-purple-50 via-blue-50 to-fuchsia-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-purple-700 mb-8 text-center">FAQ</h2>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="q1">
                <AccordionTrigger>What genres do you love performing?</AccordionTrigger>
                <AccordionContent>
                  From classic tragedies to modern comedies, I love them all! I have a special fondness for physical theatre and improvisation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Are you available for collaborations or workshops?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! I'm always eager to work on new projects, collaborate with fellow artists, or run acting workshops.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Do you have experience with film or voice acting?</AccordionTrigger>
                <AccordionContent>
                  Yes, I have acted in several student short films and am training in voice acting for animation and audiobooks.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-purple-700 mb-4">Let's Connect</h2>
            <p className="text-gray-700 mb-8">
              Interested in working together? Reach out for collaborations, auditions, or just to say hi!
            </p>
            <Button size="lg" className="bg-gradient-to-r from-fuchsia-400 to-blue-400 text-white shadow-lg hover:from-fuchsia-500 hover:to-blue-500">
              <ArrowRight className="mr-2 w-5 h-5" /> Email Me
            </Button>
            <div className="flex gap-4 justify-center mt-8">
              <a href="https://twitter.com" target="_blank" rel="noopener">
                <Twitter className="w-7 h-7 text-blue-400 hover:text-blue-600 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener">
                <Linkedin className="w-7 h-7 text-blue-700 hover:text-blue-900 transition" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener">
                <Github className="w-7 h-7 text-gray-700 hover:text-black transition" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;