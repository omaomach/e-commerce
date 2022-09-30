import * as React from "react";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";

const steps = ["Shipping address", "Payment details", "Review your order"];


function getStepContent(step) {
	switch (step) {
		case 0:
			return <AddressForm />;
		case 1:
			return <PaymentForm />;
		case 2:
			return <Review />;
		default:
			throw new Error("Unknown step");
	}
}

export default function Checkout() {
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	return (
		<>
			<Container maxWidth="sm">
				<h1 align="center">Checkout</h1>
				<Stepper activeStep={activeStep}>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<>
					{activeStep === steps.length ? (
						<>
							<h2>Thank you for your order.</h2>
							<h4>
								Your order number is #2001539. We have emailed your order
								confirmation, and will send you an update when your order has
								shipped.
							</h4>
						</>
					) : (
						<>
							{getStepContent(activeStep)}
							<div sx={{ display: "flex", justifyContent: "flex-end" }}>
								{activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}

								<Button variant="contained" onClick={handleNext}>
									{activeStep === steps.length - 1 ? "Place order" : "Next"}
								</Button>
							</div>
						</>
					)}
				</>
			</Container>
		</>
	);
}
