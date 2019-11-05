import React from 'react';
import NetlifyForm from 'react-netlify-form';
import { Box, Button, Text } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';

const { RECAPTCHA_SK } = process.env;

const ContactForm = () => (
  <NetlifyForm
    name="contact"
    honeypotName="__sp"
    recaptcha={{
      sitekey: RECAPTCHA_SK,
      size: 'invisible'
    }}
  >
    {({ loading, error, success }) => (
      <>
        <Box pb={2}>
          <Label htmlFor='name' fontWeight='body' pb={1}>Your name</Label>
          <Input
            id='name'
            name='name'
            required={true}
          />
        </Box>
        <Box pb={2}>
          <Label htmlFor='email' fontWeight='body' pb={1}>Your email</Label>
          <Input
            id='email'
            name='email'
            type='email'
            required={true}
          />
        </Box>
        <Box pb={3}>
          <Label htmlFor='body' fontWeight='body' pb={1}>Message</Label>
          <Textarea
            id='body'
            name='body'
            rows={18}
            required={true}
          />
        </Box>
        <Box textAlign={['left', 'right', 'right']}>
          {error && <Text>There was an error, try again</Text>}
          {success && <Text>Thanks, I'll get back to you soon</Text>}
          <Button type="submit" disabled={loading}>Send</Button>
        </Box>
      </>
    )}
  </NetlifyForm>
);

export default ContactForm;