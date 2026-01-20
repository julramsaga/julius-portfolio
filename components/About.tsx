'use client';

import { Container, Title, Text, SimpleGrid, Card, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import classes from './About.module.css';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '3+', label: 'Projects Completed' },
  { value: '100%', label: 'User-Focused' },
];

export function About() {
  return (
    <Box component="section" id="about" className={classes.about}>
      <Container size="xl">
        <div className="section-header">
          <Text className="section-label">About Me</Text>
          <Title order={2} className="section-title">
            Designer & Developer
          </Title>
        </div>
        <div className={classes.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Text size="xl" fw={500} lh={1.75} mb="lg" c="gray.9">
              I'm a hybrid designer-developer passionate about creating digital products that are
              both beautiful and functional. With over 2 years of experience, I bridge the gap
              between design and development to deliver exceptional user experiences.
            </Text>
            <Text size="lg" lh={1.75} c="dimmed" mb="lg">
              My approach combines user-centered design principles with modern development
              practices. I believe in creating interfaces that are not only visually appealing but
              also intuitive, accessible, and performant. Whether I'm designing a new feature or
              building it from scratch, I always keep the user at the center of every decision.
            </Text>
            <Text size="lg" lh={1.75} c="dimmed">
              Currently available for immediate projects and working within US timezone. I'm always
              excited to collaborate on innovative projects that push the boundaries of digital
              design and development.
            </Text>
          </motion.div>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt="3xl">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card padding="xl" radius="md" shadow="md" className={classes.statCard}>
                  <Text size="3rem" fw={700} c="indigo" mb="sm" ta="center">
                    {stat.value}
                  </Text>
                  <Text size="md" c="dimmed" ta="center">
                    {stat.label}
                  </Text>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>
        </div>
      </Container>
    </Box>
  );
}

