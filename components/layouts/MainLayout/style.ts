import styled from "styled-components";

const Body = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0px 40px 80px 40px;
`;

const TitleWrapper = styled.div`
  margin: 0px 0px 24px 0px;
`;

const TitleText = styled.a`
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: 600;
`;

export { Body, TitleWrapper, TitleText };
