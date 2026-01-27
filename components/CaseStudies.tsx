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
import { link } from 'fs';


const caseStudies = [
  {
    category: 'Mobile App',
    title: 'E-Commerce Platform',
    description:
      'Complete design of a modern e-commerce platform focusing on improved user experience, conversion optimization, and mobile-first design.',
    image: '/case-studies/ecommerce.png',
    tags: [
      'Figma',
      'Mantine Library',
      'User Research',
      'Google 3 Design System',
      'UX | UI Design',
      'Zeplin',
      'Design Specification',
    ],
    figmaLink:'https://www.figma.com/design/GlABOn45wCBYPxFAbzX1u7/CODEBILITY?node-id=2-2&p=f&t=8DHhphke5Ic07GCL-0',
  },
  {
    category: 'Web Design',
    title: 'Invoice UI',
    description:
      'This Invoice UI is designed to mirror the familiarity of an Excel-style layout during the review phase, helping users validate data quickly and confidently.',
    image: '/case-studies/invoice.png',
    tags: [
      'Figma',
      'Mantine Library',
      'Design System',
      'UX | UI Design',
      'User Research',
    ],
    figmaLink:'https://www.figma.com/design/CZYdyFmFkRAfyWtIC2auZl/Julius-Saga--M-Component-?node-id=1108-33&p=f&t=5n7uRRyrwlZKHRxR-0',
  },
  {
    category: 'Mobile App | Web App',
    title: 'Nucleus CRM',
    description:
      'Nucleus CRM is a centralized platform designed to help teams manage leads, customers, and tasks efficiently.',
    image: '/case-studies/nucleus 1.png',
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
    figmaLink:'https://www.figma.com/design/0mnp15QbkKh1xwNE6T6brp/Q4.2025?t=zDqWL7NHwKp25TLU-0',
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
                    href={study.figmaLink}
                    target="blank"
                    rel="noopener noreffer"
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