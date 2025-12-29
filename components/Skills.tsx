'use client';

import { Container, Title, Text, SimpleGrid, Card, Badge, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import classes from './Skills.module.css';

const skillCategories = [
  {
    title: 'Design',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'Prototyping', 'User Research', 'Wireframing', 'Design Systems'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Sass'],
  },
  {
    title: 'Backend & Tools',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Git', 'Webpack', 'Vite', 'REST APIs'],
  },
];

export function Skills() {
  return (
    <Box component="section" id="skills" className={classes.skills}>
      <Container size="xl">
        <div className="section-header">
          <Text className="section-label">Skills & Tools</Text>
          <Title order={2} className="section-title">
            What I Work With
          </Title>
        </div>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card padding="xl" radius="md" className={classes.categoryCard}>
                <Title order={3} size="xl" fw={600} mb="lg">
                  {category.title}
                </Title>
                <div className={classes.tags}>
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      size="sm"
                      variant="light"
                      color="gray"
                      radius="md"
                      className={classes.tag}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

