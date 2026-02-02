'use client';

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Stack,
  Anchor,
} from '@mantine/core';
import { motion } from 'framer-motion';
import classes from './ReferencesSection.module.css';

type Reference = {
  name: string;
  role: string;
  company: string;
  email?: string;
  phone?: string;
  linkedin?: string;
};

const references: Reference[] = [
  {
    name: 'Brylle Cabañal',
    role: 'Lead Backend | AI Engineer',
    company: 'UPOS',
    email: 'bryllecabanal@gmail.com',
    phone: '+63 927 761 7686',
    linkedin: 'https://www.linkedin.com/in/brylle-caba%C3%B1al-1541b811a/',
  },
  {
    name: 'Jestopher F. Quirino',
    role: 'Senior Software Engineer',
    company: 'Q2Q Technologies',
    email: 'jestopher@q2qtechnologies.com',
    linkedin: 'https://www.linkedin.com/in/jestopher-quirino-426378142/',
  },
  {
    name: 'Daniel Liberta',
    role: 'Project Manager | CEO | Product Lead',
    company: 'NUCLEUS',
    phone: '+1 (856) 316 8086',
    linkedin: 'https://www.linkedin.com/in/daniel-l-59975355/',
  },
  {
    name: 'Harley France Paano',
    role: 'AI Engineer | AI Automation Engineer | Backend Engineer',
    company: 'UPOS',
    phone: '+63 998 765 4321',
    linkedin: 'https://www.linkedin.com/in/harley-france-paano-b38190233/',
  },
  {
    name: 'Jann Carla Saga',
    role: 'Project Manager',
    company: 'Innovate Labs',
    phone: '+63 998 765 4321',
    linkedin:'https://www.linkedin.com/in/jann-carla-saga-279b45279/',
  },
  {
    name: 'Cyrel James Develles',
    role: 'Software Developer',
    company: 'Crimshield',
    email: 'devellescyreljames@gmail.com',
    linkedin: 'https://www.linkedin.com/in/cyrel-james-develles-352779332/',
  },
  {
    name: 'Earl Dominic Biboso',
    role: 'Software QA Engineer',
    company: 'NUCLEUS',
    phone:'+63 995 883 5733',
    linkedin: 'https://www.linkedin.com/in/earl-dominic-t-biboso-5b2426239/',
  },
  
];

export function ReferencesSection() {
  return (
    <section id="references" className={classes.references}>
      <Container size="xl">
        <div className="section-header">
          <Text className="section-label">References</Text>
          <Title order={2} className="section-title">
            People Who Recommend Me
          </Title>
        </div>

        <SimpleGrid
          cols={{ base: 1, md: 2, lg: 3 }}
          spacing="xl"
          className={classes.grid}
        >
          {references.map((ref, index) => (
            <motion.div
              key={ref.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card padding={0} radius="lg" shadow="md" className={classes.card}>
                {/* CONTENT */}
                <div className={classes.content}>
                    <Stack className={classes.stack} align="center">

                        <Text className={classes.name}>{ref.name}</Text>
                        <Text className={classes.role}>{ref.role}</Text>
                        <Text className={classes.company}>{ref.company}</Text>
                        {ref.email && <Text className={classes.contact}>📧 {ref.email}</Text>}
                        {ref.phone && <Text className={classes.contact}>📞 {ref.phone}</Text>}
                        {ref.linkedin && (<Anchor href={ref.linkedin} target="_blank" rel="nooponer noropener" size="sm" fw={600} c="indigo" className={classes.linkedin} >LinkedIn Profile → </Anchor>)}
                    </Stack>
                </div>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
