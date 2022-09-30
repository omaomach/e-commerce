import * as React from "react";
import {useState} from "react"
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AddressForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		address1: "",
		city: "",
		state: "",
        zip: "",
        country: "",
	});

    function handleChange(e){
        const name = e.target.name;
		let value = e.target.value;

        setFormData({ ...formData, [name]: value });
		console.log(formData);
    }

	return (
		<>
			<h2>Shipping address</h2>
			<form onChange={handleChange}>
				<div>
					<TextField
						required
						id="firstName"
						name="firstName"
						label="First name"
                        defaultValue={formData.firstName}
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
                        defaultValue={formData.lastName}
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
                        defaultValue={formData.address1}
						fullWidth
						autoComplete="shipping address-line1"
						variant="standard"
					/>
				</div>
				<div>
					<TextField
						required
						id="city"
						name="city"
						label="City"
                        defaultValue={formData.city}
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
                        defaultValue={formData.state}
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
                        defaultValue={formData.zip}
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
                        defaultValue={formData.country}
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
			</form>
		</>
	);
}
