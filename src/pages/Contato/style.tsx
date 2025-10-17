import styled from "styled-components";

export const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 18px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

export const ContactContainer = styled.div`
  max-width: 700px;
  padding: 32px 0 32px 0;
  display: flex;
  flex-direction: column;
`;

export const ContactTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text};
`;

export const ContactText = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.1rem;
  margin-bottom: 28px;
`;

export const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 28px;
`;

export const ContactInput = styled.input`
  background: ${({ theme }) => theme.backgroundSidebar};
  border: 1px solid ${({ theme }) => theme.explorerLine};
  border-radius: 6px;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  padding: 12px 14px;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border-color: ${({ theme }) => theme.text};
  }
`;

export const ContactTextarea = styled.textarea`
  background: ${({ theme }) => theme.backgroundSidebar};
  border: 1px solid ${({ theme }) => theme.explorerLine};
  border-radius: 6px;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  padding: 12px 14px;
  outline: none;
  min-height: 90px;
  resize: vertical;
  transition: border 0.2s;
  &:focus {
    border-color: ${({ theme }) => theme.text};
  }
`;

export const ContactButton = styled.button`
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  font-weight: 600;
  border: none;
  border-radius: 6px;
  padding: 12px 0;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 18px;
`;

export const EmailCopyBox = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.backgroundSidebar};
  border-radius: 6px;
  padding: 8px 14px;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1rem;
  margin-bottom: 18px;
  user-select: all;
`;

export const QrBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const EmailCopyButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  &:hover {
    background: ${({ theme }) => theme.backgroundSidebar};
    color: ${({ theme }) => theme.text};
  }
`;

export const EmailCopied = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  margin-left: 10px;
  font-weight: 500;
`;

export const QrImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.text};
  box-shadow: 0 0 5px 2px ${({ theme }) => theme.text}55, 0 2px 10px 0 #000a;
  background: #181920;
  transition: box-shadow 0.3s, filter 0.3s, border 0.3s;
  filter: brightness(1.08) drop-shadow(0 0 4px ${({ theme }) => theme.text}33);
  animation: qrPulse 2.2s infinite alternate;
  &:hover {
    box-shadow: 0 0 18px 4px ${({ theme }) => theme.text}cc, 0 2px 16px 0 #000c;
    filter: brightness(1.18) drop-shadow(0 0 8px ${({ theme }) => theme.text}99);
    border-color: #d8eaec;
  }
  @keyframes qrPulse {
    0% {
      box-shadow: 0 0 10px 2px ${({ theme }) => theme.text}55,
        0 2px 10px 0 #000a;
    }
    100% {
      box-shadow: 0 0 12px 4px ${({ theme }) => theme.text}99,
        0 2px 16px 0 #000c;
    }
  }
`;

export const QrText = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.98rem;
  margin-top: 2px;
`;
