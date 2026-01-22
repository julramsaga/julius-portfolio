'use client';

import { Container, Title, Text, SimpleGrid, Card, Anchor, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import classes from './Projects.module.css';
import Image from 'next/image';

const projects = [
  {
    title: 'Design System Library',
    description: 'Comprehensive design system with reusable components',
    image: '/case-studies/image 1.png',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio with smooth animations',
    image: '/case-studies/image 2.png',
  },
  {
    title: 'Landing Page Design',
    description: 'High-converting landing page with A/B testing',
    image: '/case-studies/image 3.png',
  },
  {
    title: 'Web Application',
    description: 'Full-stack web app with modern architecture',
    image: '/case-studies/image 2.png',
  },
];

export function Projects() {
  return (
    <Box component="section" id="projects" className={classes.projects}>
      <Container size="xl">
        <div className="section-header">
          <Text className="section-label">Projects</Text>
          <Title order={2} className="section-title">
            Recent Work
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
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={classes.info}>
                  <Title order={3} size="xl" fw={600} mb="sm">
                    {project.title}
                  </Title>
                  <Text size="sm" c="dimmed" mb="md">
                    {project.description}
                  </Text>
                  <Anchor href="#" size="sm" fw={600} c="indigo" className={classes.link}>
                    View Project →
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

