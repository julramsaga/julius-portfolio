'use client';

import { Container, Title, Text, Box, List, Card } from '@mantine/core';
import { motion } from 'framer-motion';
import classes from './Experience.module.css';

const experiences = [
  {
    date: '2022 - Present',
    title: 'UX/UI Designer & Developer',
    company: 'Freelance / Various Clients',
    description:
      'Working with startups and established companies to design and develop user-centered digital products. Collaborating with cross-functional teams to deliver high-quality solutions.',
    highlights: [
      'Designed and developed 50+ web and mobile applications',
      'Improved user engagement by 40% through UX optimization',
      'Built scalable design systems and component libraries',
    ],
  },
  {
    date: '2021 - 2022',
    title: 'Junior Product Designer',
    company: 'Tech Company',
    description:
      'Focused on creating intuitive user interfaces and conducting user research to inform design decisions. Collaborated closely with developers to ensure pixel-perfect implementations.',
    highlights: [
      'Led design for 3 major product features',
      'Conducted user interviews and usability testing',
      'Created comprehensive design documentation',
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

