"use client"
import { personalFavorites } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageHeader from "@/components/shared/page-header";
import { AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const About = () => {
  return (
    <motion.section
      className="max-w-6xl w-full mx-auto px-4 my-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader
        title="About Me"
        description="Learn more about Valentine Omonya, a passionate Backend Software Engineer."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="p-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <motion.div
                className="md:w-1/3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  className="object-cover w-full h-full"
                  src="/about.png"
                  alt="About Valentine Omonya"
                  width={400}
                  height={400}
                />
              </motion.div>

              <motion.div
                className="flex flex-col space-y-6 p-6 md:w-2/3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div variants={itemVariants}>
                  <h2 className="text-sm uppercase tracking-wide text-muted-foreground">
                    Introduction
                  </h2>
                  <motion.h1
                    className="text-3xl font-bold leading-tight mt-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    Backend Software Engineer passionate about performance,
                    problem-solving, and clean architecture
                  </motion.h1>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4">
                  <p className="text-lg">
                    I’m a Software Engineer with a strong focus on backend
                    development, experienced in building scalable systems and APIs
                    using technologies like Go, PostgreSQL, and Docker. With
                    around 2 years of hands-on experience, I’m passionate about
                    crafting robust server-side logic, optimizing performance, and
                    solving complex architectural challenges.
                  </p>
                  <p className="text-lg">
                    Outside of coding, I enjoy sharing insights through technical
                    writing and collaborating with developer communities to help
                    others deepen their understanding of system design, real-time
                    communication, and backend best practices.
                  </p>
                </motion.div>

                <hr />

                <motion.div
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm"
                  variants={containerVariants}
                >
                  {personalFavorites.map((item, index) => (
                    <motion.div
                      key={item.category}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex justify-start md:justify-center items-center space-x-2 space-y-2 p-2 rounded-lg hover:bg-accent"
                    >
                      <div className="flex items-center justify-center">
                        <item.icon />
                      </div>
                      <div>
                        <h3>{item.category}</h3>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="mt-12">
            <CardHeader className="pb-0">
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div className="space-y-2">
                <h3 className="text-lg font-semibold flex items-center">
                  Software Engineering Attaché
                </h3>
                <p className="text-muted-foreground">Teach2Give • Kirinyaga</p>
                <p className="text-sm text-muted-foreground">May 2025 - Present</p>
              </motion.div>
              <hr className="mt-5" />
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <motion.div whileHover={{ scale: 1.02 }}>
                      Previous Roles
                    </motion.div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4"
                      >
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold flex items-center">
                            Front-end Developer
                          </h3>
                          <p className="text-muted-foreground">GodanInfo • Remote</p>
                          <p className="text-sm text-muted-foreground">
                            Jan 2025 - April 2025
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold flex items-center">
                            Freelancer
                          </h3>
                          <p className="text-muted-foreground">
                            BytechSolutions Kenya • Remote
                          </p>
                          <p className="text-sm text-muted-foreground">
                            November 2023 – Current
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
