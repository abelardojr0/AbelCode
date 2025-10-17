import React, { useRef, useState } from "react";
import {
  ContactContainer,
  ContactTitle,
  ContactText,
  ContactForm,
  ContactInput,
  ContactTextarea,
  ContactButton,
  SocialRow,
  EmailCopyBox,
  EmailCopyButton,
  EmailCopied,
  QrImage,
  QrText,
  TopRow,
} from "./style";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
  IconMail,
  IconBrandWhatsapp,
  IconCopy,
} from "@tabler/icons-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EMAIL = "abelardo.junior.181@email.com";
const WHATSAPP_LINK =
  "https://wa.me/5585985300694?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20voc%C3%AA.";
const LINKEDIN = "https://www.linkedin.com/in/abelardo-junior/";
const GITHUB = "https://github.com/abelardojr0";
const INSTAGRAM = "https://www.instagram.com/abel.jr_/";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/moqzazpz";

const Contato: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef<HTMLSpanElement>(null);

  function handleCopyEmail() {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        ?.value,
    };
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        form.reset();
        toast.success("Mensagem enviada com sucesso!", {
          position: "top-right",
        });
      } else {
        setError("Erro ao enviar. Tente novamente.");
        toast.error("Erro ao enviar. Tente novamente.", {
          position: "top-right",
        });
      }
    } catch {
      setError("Erro ao enviar. Tente novamente.");
      toast.error("Erro ao enviar. Tente novamente.", {
        position: "top-right",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <ContactContainer>
      <ToastContainer />
      <TopRow>
        <div style={{ flex: 1 }}>
          <ContactTitle>Vamos conversar?</ContactTitle>
          <ContactText>
            Estou aberto para networking, freelas, dúvidas ou convites para
            projetos. Preencha o formulário ou me chame nas redes abaixo!
          </ContactText>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: 80,
          }}
        >
          <QrImage
            src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://wa.me/5585985300694"
            alt="QR WhatsApp"
          />
          <QrText>WhatsApp</QrText>
        </div>
      </TopRow>
      <ContactForm onSubmit={handleSubmit}>
        <ContactInput name="name" type="text" placeholder="Seu nome" required />
        <ContactInput
          name="email"
          type="email"
          placeholder="Seu e-mail"
          required
        />
        <ContactTextarea name="message" placeholder="Sua mensagem" required />
        <ContactButton type="submit" disabled={sending}>
          {sending ? "Enviando..." : "Enviar mensagem"}
        </ContactButton>
        {error && (
          <span style={{ color: "#ff5555", marginTop: 8 }}>{error}</span>
        )}
      </ContactForm>
      <EmailCopyBox>
        <IconMail size={20} style={{ marginRight: 8 }} />
        <span ref={emailRef} style={{ marginRight: 8 }}>
          {EMAIL}
        </span>
        <EmailCopyButton type="button" onClick={handleCopyEmail}>
          <IconCopy size={18} />
        </EmailCopyButton>
        {copied && <EmailCopied>Copiado!</EmailCopied>}
      </EmailCopyBox>
      <SocialRow>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
          <IconBrandLinkedin size={32} />
        </a>
        <a href={GITHUB} target="_blank" rel="noopener noreferrer">
          <IconBrandGithub size={32} />
        </a>
        <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
          <IconBrandInstagram size={32} />
        </a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <IconBrandWhatsapp size={32} />
        </a>
      </SocialRow>
    </ContactContainer>
  );
};

export default Contato;
