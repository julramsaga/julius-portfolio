'use client';

import { Container, Title, Text, Box, List, Card } from '@mantine/core';
import { motion } from 'framer-motion';
import classes from './Experience.module.css';

const experiences = [
  {
    date: '2024 - 2026',
    title: 'UX/UI Designer & Product Designer',
    company: 'Nucleus Solar',
    description:
      'Working with startups and established companies to design and develop user-centered digital products. Collaborating with cross-functional teams to deliver high-quality solutions.',
    highlights: [
      'Designed end-to-end CRM workflows covering lead management, customer tracking, and task organization to simplify complex business processes.',
      'Created scalable, user-centered interfaces focused on clarity, usability, and reducing cognitive load for day-to-day CRM operations.',
      'Collaborated closely with development considerations, ensuring designs were build-ready, consistent, and aligned with real-world product constraints.',
    ],
  },
  {
    date: '2023 - 2024',
    title: 'UX | UI Designer & Frontend Developer',
    company: 'VA Max',
    description:
      'Focused on creating intuitive user interfaces and conducting user research to inform design decisions. Collaborated closely with developers to ensure pixel-perfect implementations.',
    highlights: [
      'Initial Discovery & Understanding: Analyzed business goals, user needs, and existing CRM workflows to identify key pain points and opportunities for simplification.',
      'Structuring the Experience: Defined user flows, information architecture, and core features such as lead pipelines, customer records, and task tracking to create a clear product foundation.',
      'Design Execution (Mid Phase): Produced wireframes and high-fidelity interfaces focused on usability, scalability, and reduced cognitive load, ensuring designs were practical and ready for development.',
    ],
  },
];

export function Experience() {
  return (
    <Box component="section" id="experience" className={classes.experience}>
      <Container size="xl">
        <div className="section-header">
          <Text className="section-label">Experience</Text>
          <Title order={2} className="section-title">
            Professional Journey
          </Title>
        </div>
        <div className={classes.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={classes.timelineItem}
            >
              <div className={classes.marker} />
              <Card padding="xl" radius="md" shadow="md" className={classes.content}>
                <Text size="sm" fw={600} c="indigo" mb="sm">
                  {exp.date}
                </Text>
                <Title order={3} size="xl" fw={600} mb="xs">
                  {exp.title}
                </Title>
                <Text size="md" c="dimmed" mb="md">
                  {exp.company}
                </Text>
                <Text size="sm" c="dimmed" lh={1.75} mb="md">
                  {exp.description}
                </Text>
                <List size="sm" c="dimmed" spacing="sm">
                  {exp.highlights.map((highlight) => (
                    <List.Item key={highlight} className={classes.highlight}>
                      {highlight}
                    </List.Item>
                  ))}
                </List>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Box>
  );
}

