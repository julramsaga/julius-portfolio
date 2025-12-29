'use client';

import { Container, Title, Text, SimpleGrid, Card, Badge, Anchor, Box, Image } from '@mantine/core';
import { motion } from 'framer-motion';
import classes from './CaseStudies.module.css';

const caseStudies = [
  {
    category: 'Product Design',
    title: 'E-Commerce Platform Redesign',
    description:
      'Complete redesign of a modern e-commerce platform focusing on improved user experience, conversion optimization, and mobile-first design.',
    tags: ['Figma', 'React', 'User Research'],
  },
  {
    category: 'UX Design',
    title: 'SaaS Dashboard Interface',
    description:
      'Designed and developed a comprehensive dashboard interface for a SaaS platform, improving user productivity and engagement metrics.',
    tags: ['Figma', 'TypeScript', 'Design System'],
  },
  {
    category: 'Mobile App',
    title: 'Fitness Tracking Mobile App',
    description:
      'End-to-end design and development of a fitness tracking mobile application with intuitive UI and seamless user onboarding.',
    tags: ['Figma', 'React Native', 'User Testing'],
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
                <div className={classes.image}>
                  <div className={classes.imagePlaceholder} />
                </div>
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

