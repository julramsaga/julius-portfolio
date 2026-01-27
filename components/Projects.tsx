'use client';

import { Container, Title, Text, SimpleGrid, Card, Anchor, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import classes from './Projects.module.css';
import Image from 'next/image';

const projects = [
  {
    title: 'Greenade',
    description: 'This application promotes a plant-based diet by encouraging users to make healthier food choices through insightful tracking and personalized tips. The sleek interface invites users to log their meals, monitor calorie intake, and track macronutrient distribution, emphasizing plant-based nutrition like fruits, vegetables, and legumes.',
    image: '/case-studies/greenade.png',
    link: 'https://www.behance.net/gallery/208083745/Go-GREEN',
  },
  {
    title: 'VR-Virtual Realms',
    description: 'Experience Reality Within Virtual Realms" refers to the immersive exploration of digital environments where users engage with interactive content, simulating real-world experiences and adventures through virtual reality technology',
    image: '/case-studies/VR.png',
    link: 'https://www.behance.net/gallery/210191725/VReality',
  },
  {
    title: 'SkyVoyage',
    description: 'SkyVoyage is a travel application designed to help users book safe flights with accurate information and an effortless booking experience.',
    image: '/case-studies/Skyvoyage.png',
    link: 'https://www.behance.net/gallery/210155841/SKYVOYAGE',
  },
  {
    title: 'HOME HAVEN',
    description: 'HomeHaven offers high-quality furniture that blends modern design, timeless elegance, and everyday comfort, helping you create a home that truly reflects your style.',
    image: '/case-studies/Homehaven.png',
    link: 'https://www.behance.net/gallery/210224927/HomeHaven',
  },
  {
    title: 'D&D Dare to Design',
    description: 'D&D (Dare to Design) is a creative studio application that empowers designers to edit videos, create visuals, and bring ideas to life with AI-assisted tools faster, smarter, and more intuitively.',
    image: '/case-studies/D and D.png',
    link: 'https://www.behance.net/gallery/210173719/DARE-TO-DESIGN-(D-D)',
  },
  {
    title: 'Fine Crust Italian Cuisine',
    description: 'This design was created to showcase a modern pizza brand that highlights craftsmanship, authenticity, and warmth. The goal was to communicate quality ingredients, passion in baking, and a welcoming experience that brings people together.',
    image: '/case-studies/FineCrust.png',
    link: 'https://www.behance.net/gallery/210156645/FINE-CRUST',
  },
];

export function Projects() {
  return (
    <Box component="section" id="projects" className={classes.projects}>
      <Container size="xl">
        <div className="section-header">
          <Text className="section-label">DESIGNS</Text>
          <Title order={2} className="section-title">
            Sample Work
          </Title>
        </div>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card padding={0} radius="md" className={classes.card}>
                <div className={classes.image}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition:'top' }}
                  />
                </div>
                <div className={classes.info}>
                  <Title order={3} size="xl" fw={600} mb="sm">
                    {project.title}
                  </Title>
                  <Text size="sm" c="dimmed" mb="md">
                    {project.description}
                  </Text>
                  <Anchor
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      fw={600}
                      c="indigo"
                      className={classes.link}
                    >
                      View Design →
                  </Anchor>

                </div>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

