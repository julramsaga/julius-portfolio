'use client';

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Badge,
  Anchor,
  Box,
} from '@mantine/core';
import { motion } from 'framer-motion';
import Image from 'next/image';
import classes from './CaseStudies.module.css';


const caseStudies = [
  {
    category: 'Mobile App',
    title: 'E-Commerce Platform',
    description:
      'Complete design of a modern e-commerce platform focusing on improved user experience, conversion optimization, and mobile-first design.',
    image: '/case-studies/image 1.png',
    tags: [
      'Figma',
      'Mantine Library',
      'User Research',
      'Google 3 Design System',
      'UX | UI Design',
      'Zeplin',
      'Design Specification',
    ],
  },
  {
    category: 'Web Design',
    title: 'Invoice UI',
    description:
      'This Invoice UI is designed to mirror the familiarity of an Excel-style layout during the review phase, helping users validate data quickly and confidently.',
    image: '/case-studies/image 2.png',
    tags: [
      'Figma',
      'Mantine Library',
      'Design System',
      'UX | UI Design',
      'User Research',
    ],
  },
  {
    category: 'Mobile App | Web App',
    title: 'Nucleus CRM',
    description:
      'Nucleus CRM is a centralized platform designed to help teams manage leads, customers, and tasks efficiently.',
    image: '/case-studies/image 3.png',
    tags: [
      'Figma',
      'React',
      'User Interface',
      'User Experience',
      'Jira',
      'Miro',
      'Zeplin',
      'Material UI Library',
    ],
  },
];


export function CaseStudies() {
  return (
    <Box component="section" id="case-studies" className={classes.caseStudies}>
      <Container size="xl">
        <div className="section-header">
          <Text className="section-label">Case Studies</Text>
          <Title order={2} className="section-title">
            Featured Work
          </Title>
        </div>

        <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="xl">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card padding={0} radius="lg" shadow="md" className={classes.card}>
                {/* IMAGE */}
                <div className={classes.image}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* CONTENT */}
                <div className={classes.content}>
                  <Badge size="xs" color="indigo" variant="light" mb="md">
                    {study.category}
                  </Badge>

                  <Title order={3} size="xl" fw={600} mb="md">
                    {study.title}
                  </Title>

                  <Text size="sm" c="dimmed" lh={1.75} mb="lg">
                    {study.description}
                  </Text>

                  <div className={classes.tags}>
                    {study.tags.map((tag) => (
                      <Badge key={tag} size="xs" variant="dot" color="gray" radius="md">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Anchor
                    href="#"
                    size="sm"
                    fw={600}
                    c="indigo"
                    mt="lg"
                    className={classes.link}
                  >
                    View Case Study →
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