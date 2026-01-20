'use client';

import { useState } from 'react';
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Box,
  Stack,
  Anchor,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { motion } from 'framer-motion';
import classes from './Contact.module.css';

export function Contact() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must be at least 2 characters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      subject: (value) => (value.length < 2 ? 'Subject must be at least 2 characters' : null),
      message: (value) => (value.length < 10 ? 'Message must be at least 10 characters' : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        notifications.show({
          title: 'Success!',
          message: "Your message has been sent. I'll get back to you soon!",
          color: 'green',
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Failed to send message. Please try again later.',
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="section" id="contact" className={classes.contact}>
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-header" style={{ textAlign: 'left' }}>
              <Text className="section-label">Contact</Text>
              <Title order={2} className="section-title" style={{ textAlign: 'left' }}>
                Let's Work Together
              </Title>
            </div>
            <Text size="lg" c="dimmed" lh={1.75} mb="xl" style={{ textAlign:'left'}}>
              I'm currently available for new projects and opportunities. Whether you have a
              project in mind or just want to chat about design and development, I'd love to hear
              from you.
            </Text>
            <Stack gap="lg" mb="xl">
              <div>
                <Text size="xs" fw={600} c="dimmed" tt="uppercase" mb="xs" style={{ letterSpacing: '0.05em',}}>
                  Email
                </Text>
                <Anchor href="mailto:julius@example.com" size="lg" c="gray.9">
                  julius@example.com
                </Anchor>
              </div>
              <div>
                <Text size="xs" fw={600} c="dimmed" tt="uppercase" mb="xs" style={{ letterSpacing: '0.05em',}}>
                  Availability
                </Text>
                <Text size="lg" c="gray.9">
                  Immediate
                </Text>
              </div>
              <div>
                <Text size="xs" fw={600} c="dimmed" tt="uppercase" mb="xs" style={{ letterSpacing: '0.05em',}}>
                  Timezone
                </Text>
                <Text size="lg" c="gray.9">
                  US Timezone
                </Text>
              </div>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box className={classes.formWrapper}>
              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="lg">
                  <TextInput
                    label="Name"
                    placeholder="Your name"
                    required
                    {...form.getInputProps('name')}
                  />
                  <TextInput
                    label="Email"
                    placeholder="your.email@example.com"
                    type="email"
                    required
                    {...form.getInputProps('email')}
                  />
                  <TextInput
                    label="Subject"
                    placeholder="Project inquiry"
                    required
                    {...form.getInputProps('subject')}
                  />
                  <Textarea
                    label="Message"
                    placeholder="Tell me about your project..."
                    required
                    minRows={5}
                    {...form.getInputProps('message')}
                  />
                  <Button
                    type="submit"
                    size="md"
                    color="indigo"
                    radius="md"
                    loading={loading}
                    style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Box>
          </motion.div>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

