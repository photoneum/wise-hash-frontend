import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SupportFragment: React.FC = () => {
    return (
        <div className=" bg-transparent">
            <div className="ml-6 xl:ml-12 mt-10 flex flex-col gap-6"> 
                <span className="text-4xl font-bold">Support</span>
            </div>
            <div className="settings">
                <div className="mt-10 ml-6 xl:ml-12" style={{ width: "90%" }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={
                                <IconButton style={{ color: "white" }}>
                                    <KeyboardArrowDownIcon />
                                </IconButton>}
                            style={{ backgroundColor: "black", color: "white", padding: "10px", paddingLeft: "12px" }}
                        >
                            <h4>How is product authenticity ensured on Wise Hash's platform?</h4>
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ backgroundColor: "white", color: "black", padding: "10px", paddingLeft: "12px", paddingTop: "25px" }}
                        >
                            <p>Wise Hash uses blockchain technology to track each product in the supply chain. Every item receives a unique identifier, allowing us to track its journey from the producer to the end consumer. This ensures the authenticity and transparency of each product on the platform.</p>
                            <p>NOTE:</p>
                            <p>Once a product is verified on the blockchain, its record cannot be altered, ensuring data integrity and trustworthiness for all users.</p>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="mt-5 ml-6 xl:ml-12" style={{ width: "90%" }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={
                                <IconButton style={{ color: "white" }}>
                                    <KeyboardArrowDownIcon />
                                </IconButton>}
                            style={{ backgroundColor: "black", color: "white", padding: "10px", paddingLeft: "12px" }}
                        >
                            <h4>What should I do if I suspect tampering with my product?</h4>
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ backgroundColor: "white", color: "black", padding: "10px", paddingLeft: "12px", paddingTop: "25px" }}
                        >
                            <p>If you suspect any tampering, please report it immediately. Each product's supply chain journey is recorded on the blockchain, so Wise Hash can trace any deviations or discrepancies in real-time, providing accountability at every stage.</p>
                            <p>NOTE:</p>
                            <p>Wise Hash’s blockchain records are immutable, and any attempt at tampering is traceable, helping ensure product security for our customers.</p>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="mt-5 ml-6 xl:ml-12" style={{ width: "90%" }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={
                                <IconButton style={{ color: "white" }}>
                                    <KeyboardArrowDownIcon />
                                </IconButton>}
                            style={{ backgroundColor: "black", color: "white", padding: "10px", paddingLeft: "12px" }}
                        >
                            <h4>How does Wise Hash handle quality control and compliance?</h4>
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ backgroundColor: "white", color: "black", padding: "10px", paddingLeft: "12px", paddingTop: "25px" }}
                        >
                            <p>Wise Hash integrates quality control checkpoints across the supply chain. Compliance data, including inspection results and certification status, is stored immutably on the blockchain, making it accessible for audits and transparent for end consumers.</p>
                            <p>NOTE:</p>
                            <p>Every product meets set standards before progressing through each stage of the supply chain, ensuring quality and compliance for all items on our platform.</p>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="mt-5 ml-6 xl:ml-12" style={{ width: "90%" }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={
                                <IconButton style={{ color: "white" }}>
                                    <KeyboardArrowDownIcon />
                                </IconButton>}
                            style={{ backgroundColor: "black", color: "white", padding: "10px", paddingLeft: "12px" }}
                        >
                            <h4>Can I view the entire journey of my product?</h4>
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ backgroundColor: "white", color: "black", padding: "10px", paddingLeft: "12px", paddingTop: "25px" }}
                        >
                            <p>Yes, Wise Hash provides a transparent view of each product's journey. You can view timestamped data at each stage, including location and handling information, offering complete transparency from production to delivery.</p>
                            <p>NOTE:</p>
                            <p>This visibility helps build trust, as consumers can verify each step of the product's journey on the blockchain.</p>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="mt-5 ml-6 xl:ml-12" style={{ width: "90%" }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={
                                <IconButton style={{ color: "white" }}>
                                    <KeyboardArrowDownIcon />
                                </IconButton>}
                            style={{ backgroundColor: "black", color: "white", padding: "10px", paddingLeft: "12px" }}
                        >
                            <h4>How secure is my data on Wise Hash's platform?</h4>
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ backgroundColor: "white", color: "black", padding: "10px", paddingLeft: "12px", paddingTop: "25px" }}
                        >
                            <p>Data security is at the core of Wise Hash. All supply chain information is stored on a blockchain, ensuring it is secure, immutable, and transparent. Only authorized users can view specific details, maintaining privacy and security at all times.</p>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="mt-5 ml-6 xl:ml-12" style={{ width: "90%" }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={
                                <IconButton style={{ color: "white" }}>
                                    <KeyboardArrowDownIcon />
                                </IconButton>}
                            style={{ backgroundColor: "black", color: "white", padding: "10px", paddingLeft: "12px" }}
                        >
                            <h4>What if I need help navigating the platform?</h4>
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ backgroundColor: "white", color: "black", padding: "10px", paddingLeft: "12px", paddingTop: "25px" }}
                        >
                            <p>Wise Hash provides support for users at every level. If you need assistance, please reach out to our support team, and we’ll guide you through the platform and help you make the most of our supply chain transparency solutions.</p>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default SupportFragment;
