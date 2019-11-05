import React from 'react';
import NetlifyForm from 'react-netlify-form';
import { Box, Button, Text } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';

const { GATSBY_SITE_RECAPTCHA_KEY } = process.env;

const ContactForm = () => (
  <NetlifyForm
    name="contact"
    honeypotName="__sp"
  >
    {({ loading, error, success }) => {
      return (
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
            {error && <>There was an error, try again&nbsp;&nbsp; </>}
            {success && <>Thanks, I'll get back to you soon&nbsp;&nbsp; </>}
            <Button type="submit" disabled={loading || success}>Send</Button>
          </Box>
        </>
      );
    }}
  </NetlifyForm>
);

export default ContactForm;