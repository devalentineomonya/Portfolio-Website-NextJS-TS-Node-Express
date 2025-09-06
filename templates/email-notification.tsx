import { OrderData } from "@/app/api/submit-order/route";
import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";

const baseStyles = {
  body: {
    backgroundColor: "#ffffff",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
  },
  headerSection: {
    padding: "30px 0",
    textAlign: "center" as const,
  },
  heading: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: "10px",
  },
  subHeading: {
    fontSize: "16px",
    color: "#666666",
  },
  section: {
    borderRadius: "8px",
    padding: "25px",
    margin: "20px 0",
    border: "1px solid #e0e0e0",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#333333",
    marginBottom: "15px",
  },
  divider: {
    borderTop: "1px solid #e0e0e0",
  },
  footerSection: {
    textAlign: "center" as const,
    padding: "20px 0",
    color: "#666666",
  },
  footerText: {
    fontSize: "12px",
  },
};

const productStyles = {
  productRow: {
    padding: "0 0 8px 0",
    borderBottom: "1px solid #eeeeee",
    gap: "16px",
  },
  imageColumn: {
    width: "80px",
  },
  productDetailsColumn: {
    flex: 1,
    marginRight: "auto",
  },
  productName: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#1a1a1a",

    marginBottom: "0px",
    marginTop: "0px",
  },
  productDetail: {
    fontSize: "14px",
    color: "#666666",
    marginBottom: "0px",
    marginTop: "0px",
  },
  margin: "2px 0",
  priceColumn: {
    width: "100px",
    textAlign: "right" as const,
    paddingLeft: "16px",
  },
  productImage: {
    marginRight: "20px",
    borderRadius: "6px",
  },
  productPrice: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1a1a1a",
  },
};

const summaryStyles = {
  summarySection: {
    marginTop: "10px",
  },
  summaryRow: {
    margin: "8px 0",
  },
  summaryValueColumn: {
    textAlign: "right" as const,
    width: "120px",
    paddingLeft: "15px",
  },
  summaryLabel: {
    marginBottom: "0px",
    marginTop: "0px",
    fontSize: "14px",
    color: "#1a1a1a",
  },
  summaryValue: {
    marginBottom: "0px",
    marginTop: "0px",

    fontSize: "14px",
    color: "#666666",
  },
  totalRow: {
    margin: "20px 0 0",
    padding: "15px 0 0",
    borderTop: "1px solid #e0e0e0",
  },
  totalLabel: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1a1a1a",

    marginBottom: "0px",
    marginTop: "0px",
  },
  totalValue: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1a1a1a",

    marginBottom: "0px",
    marginTop: "0px",
  },
  totalValueColumn: {
    textAlign: "right" as const,
  },
};

const infoStyles = {
  infoRow: {
    margin: "15px 0",
  },
  infoLabel: {
    fontSize: "14px",
    color: "#666666",
    marginBottom: "8px",
  },
  infoText: {
    fontSize: "14px",
    color: "#1a1a1a",
    fontWeight: "500",
    marginBottom: "0px",
    marginTop: "0px",
  },
};

interface HeaderProps {
  title: string;
  subtitle: string;
}

function EmailHeader({ title, subtitle }: HeaderProps) {
  return (
    <Section style={baseStyles.headerSection}>
      <Text style={baseStyles.heading}>{title}</Text>
      <Text style={baseStyles.subHeading}>{subtitle}</Text>
    </Section>
  );
}

interface ProductRowProps {
  item: {
    productId: string;
    image: string;
    name: string;
    size: string;
    quantity: number;
    price: number;
  };
}

function ProductRow({ item }: ProductRowProps) {
  return (
    <Row key={item.productId} style={productStyles.productRow}>
      <Column style={productStyles.imageColumn}>
        <Img
          src={item.image}
          width="80"
          height="80"
          alt={item.name}
          style={productStyles.productImage}
        />
      </Column>

      <Column style={productStyles.productDetailsColumn}>
        <Link href={`https://v4.valentinee.dev/shop/${item.productId}`}>
          <Text style={productStyles.productName}>{item.name}</Text>
        </Link>
        <Text style={productStyles.productDetail}>Size: {item.size}</Text>
        <Text style={productStyles.productDetail}>
          Quantity: x{item.quantity}
        </Text>
      </Column>

      <Column style={productStyles.priceColumn}>
        <Text style={productStyles.productPrice}>
          KES {item.price * item.quantity}
        </Text>
      </Column>
    </Row>
  );
}

interface OrderSummaryProps {
  total: number;
}

function OrderSummary({ total }: OrderSummaryProps) {
  return (
    <Section style={summaryStyles.summarySection}>
      <Row style={summaryStyles.summaryRow}>
        <Column>
          <Text style={summaryStyles.summaryLabel}>Subtotal</Text>
        </Column>
        <Column style={summaryStyles.summaryValueColumn}>
          <Text style={summaryStyles.summaryValue}>KES {total}</Text>
        </Column>
      </Row>

      <Row style={summaryStyles.summaryRow}>
        <Column>
          <Text style={summaryStyles.summaryLabel}>Shipping</Text>
        </Column>
        <Column style={summaryStyles.summaryValueColumn}>
          <Text style={summaryStyles.summaryValue}>KES 200.00</Text>
        </Column>
      </Row>

      <Row style={summaryStyles.totalRow}>
        <Column>
          <Text style={summaryStyles.totalLabel}>Total</Text>
        </Column>
        <Column style={summaryStyles.totalValueColumn}>
          <Text style={summaryStyles.totalValue}>KES {total + 200}.00</Text>
        </Column>
      </Row>
    </Section>
  );
}

interface CustomerInfoProps {
  data: OrderData;
  title: string;
}

function CustomerInfo({ data, title }: CustomerInfoProps) {
  return (
    <Section style={baseStyles.section}>
      <Text style={baseStyles.sectionTitle}>{title}</Text>
      <Hr style={baseStyles.divider} />

      <Row style={infoStyles.infoRow}>
        <Column>
          <Text style={infoStyles.infoLabel}>
            {title === "Customer Information" ? "Name" : "Customer Name"}
          </Text>
          <Text style={infoStyles.infoText}>
            {data.firstName} {data.lastName}
          </Text>
        </Column>
        <Column>
          <Text style={{ ...infoStyles.infoLabel, textAlign: "right" }}>
            {title === "Customer Information" ? "Email" : "Contact Email"}
          </Text>
          <Text style={{ ...infoStyles.infoText, textAlign: "right" }}>
            {data.email}
          </Text>
        </Column>
      </Row>

      <Row style={infoStyles.infoRow}>
        <Column>
          <Text style={infoStyles.infoLabel}>
            {title === "Customer Information" ? "Phone" : "Phone Number"}
          </Text>
          <Text style={infoStyles.infoText}>{data.phone}</Text>
        </Column>
        <Column>
          <Text style={{ ...infoStyles.infoLabel, textAlign: "right" }}>
            Shipping Address
          </Text>
          <Text style={{ ...infoStyles.infoText, textAlign: "right" }}>
            {data.address}
          </Text>
        </Column>
      </Row>
    </Section>
  );
}

interface EmailFooterProps {
  text: string;
}

function EmailFooter({ text }: EmailFooterProps) {
  return (
    <Section style={baseStyles.footerSection}>
      <Text style={baseStyles.footerText}>{text}</Text>
    </Section>
  );
}

// Client Template
export function OrderConfirmationClient({ data }: { data: OrderData }) {
  console.log(data);
  const total =
    data.cartItems.reduce(
      (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
      0
    ) || 0;

  return (
    <Html>
      <Head />
      <Body style={baseStyles.body}>
        <Container style={baseStyles.container}>
          <EmailHeader
            title={`Thank you for your order, ${data.firstName}!`}
            subtitle="Your order is being processed"
          />

          <Section style={baseStyles.section}>
            <Text style={baseStyles.sectionTitle}>Order Details</Text>
            <Hr style={baseStyles.divider} />

            {data.cartItems.map((item) => (
              <ProductRow key={item.productId} item={item} />
            ))}

            <OrderSummary total={total} />
          </Section>

          <CustomerInfo data={data} title="Customer Information" />

          <EmailFooter text={`© ${new Date().getFullYear()} Devalentine`} />
        </Container>
      </Body>
    </Html>
  );
}

// Admin Template
export function OrderNotificationAdmin({ data }: { data: OrderData }) {
  const total = data.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Html>
      <Head />
      <Body style={baseStyles.body}>
        <Container style={baseStyles.container}>
          <EmailHeader
            title="New Order Received"
            subtitle="Order requires processing"
          />

          <Section style={baseStyles.section}>
            <Text style={baseStyles.sectionTitle}>Order Summary</Text>
            <Hr style={baseStyles.divider} />

            {data.cartItems.map((item) => (
              <ProductRow key={item.productId} item={item} />
            ))}

            <OrderSummary total={total} />
          </Section>

          <CustomerInfo data={data} title="Customer Details" />

          <EmailFooter
            text={`New order notification - ${new Date().toLocaleString()}`}
          />
        </Container>
      </Body>
    </Html>
  );
}

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactNotificationAdmin({ data }: { data: ContactData }) {
  return (
    <Html>
      <Head />
      <Body style={baseStyles.body}>
        <Container style={baseStyles.container}>
          <EmailHeader
            title="New Contact Form Submission"
            subtitle="Requires follow-up"
          />

          <Section style={baseStyles.section}>
            <Text style={baseStyles.sectionTitle}>Contact Details</Text>
            <Hr style={baseStyles.divider} />

            <Row style={infoStyles.infoRow}>
              <Column>
                <Text style={infoStyles.infoLabel}>Name</Text>
                <Text style={infoStyles.infoText}>{data.name}</Text>
              </Column>
              <Column>
                <Text style={{ ...infoStyles.infoLabel, textAlign: "right" }}>
                  Email
                </Text>
                <Text style={{ ...infoStyles.infoText, textAlign: "right" }}>
                  {data.email}
                </Text>
              </Column>
            </Row>

            <Row style={infoStyles.infoRow}>
              <Column>
                <Text style={infoStyles.infoLabel}>Subject</Text>
                <Text style={infoStyles.infoText}>{data.subject}</Text>
              </Column>
            </Row>

            <Row style={infoStyles.infoRow}>
              <Column>
                <Text style={infoStyles.infoLabel}>Message</Text>
                <Text
                  style={{
                    ...infoStyles.infoText,
                    whiteSpace: "pre-wrap",
                    lineHeight: "1.6",
                  }}
                >
                  {data.message}
                </Text>
              </Column>
            </Row>
          </Section>

          <EmailFooter
            text={`New contact submission - ${new Date().toLocaleString()}`}
          />
        </Container>
      </Body>
    </Html>
  );
}
