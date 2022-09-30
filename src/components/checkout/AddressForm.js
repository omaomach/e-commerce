import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AddressForm() {
	return (
		<>
			<h3>Shipping address</h3>
			<div>
				<div>
					<TextField
						required
						id="firstName"
						name="firstName"
						label="First name"
						fullWidth
						autoComplete="given-name"
						variant="standard"
					/>
				</div>
				<div>
					<TextField
						required
						id="lastName"
						name="lastName"
						label="Last name"
						fullWidth
						autoComplete="family-name"
						variant="standard"
					/>
				</div>
				<div>
					<TextField
						required
						id="address1"
						name="address1"
						label="Address line 1"
						fullWidth
						autoComplete="shipping address-line1"
						variant="standard"
					/>
				</div>
				<div>
					<TextField
						id="address2"
						name="address2"
						label="Address line 2"
						fullWidth
						autoComplete="shipping address-line2"
						variant="standard"
					/>
				</div>
				<div>
					<TextField
						required
						id="city"
						name="city"
						label="City"
						fullWidth
						autoComplete="shipping address-level2"
						variant="standard"
					/>
				</div>
				<div>
					<TextField
						id="state"
						name="state"
						label="State/Province/Region"
						fullWidth
						variant="standard"
					/>
				</div>
				<div>
					<TextField
						required
						id="zip"
						name="zip"
						label="Zip / Postal code"
						fullWidth
						autoComplete="shipping postal-code"
						variant="standard"
					/>
				</div>
				<div>
					<TextField
						required
						id="country"
						name="country"
						label="Country"
						fullWidth
						autoComplete="shipping country"
						variant="standard"
					/>
				</div>
				<div>
					<FormControlLabel
						control={
							<Checkbox color="secondary" name="saveAddress" value="yes" />
						}
						label="Use this address for payment details"
					/>
				</div>
			</div>
		</>
	);
}
