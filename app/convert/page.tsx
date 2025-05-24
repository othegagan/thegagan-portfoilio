"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "lucide-react";
import React, { useState } from "react";

// Helper function to convert number to words (Indian system)
function numberToWords(num) {
	if (!num || Number.isNaN(num)) return "";

	const a = [
		"",
		"One",
		"Two",
		"Three",
		"Four",
		"Five",
		"Six",
		"Seven",
		"Eight",
		"Nine",
		"Ten",
		"Eleven",
		"Twelve",
		"Thirteen",
		"Fourteen",
		"Fifteen",
		"Sixteen",
		"Seventeen",
		"Eighteen",
		"Nineteen",
	];
	const b = [
		"",
		"",
		"Twenty",
		"Thirty",
		"Forty",
		"Fifty",
		"Sixty",
		"Seventy",
		"Eighty",
		"Ninety",
	];

    function numToWords(n, s) {
        let str = "";
        if (n > 19) {
            str += b[Math.floor(n / 10)] + (n % 10 ? ` ${a[n % 10]}` : "");
        } else {
            str += a[n];
        }
        if (n !== 0) str += s;
        return str;
    }

    let output = "";
    const sanitizedNum = Number(num.toString().replace(/,/g, ""));
    output += numToWords(Math.floor(sanitizedNum / 10000000), " Crore ");
    output += numToWords(Math.floor((sanitizedNum / 100000) % 100), " Lakh ");
    output += numToWords(Math.floor((sanitizedNum / 1000) % 100), " Thousand ");
    output += numToWords(Math.floor((sanitizedNum / 100) % 10), " Hundred ");
    output += numToWords(sanitizedNum % 100, "");
    output = `${output.trim()} Rupees Only`;
    return output.replace(/\s+/g, " ");
}

const INRWordsConverter = () => {
	const [number, setNumber] = useState("");
	const [words, setWords] = useState("");
	const [copied, setCopied] = useState(false);

	const handleChange = (e) => {
		setNumber(e.target.value);
		setWords(numberToWords(e.target.value));
		setCopied(false);
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(words);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	return (
		<div className="max-w-xl mx-auto p-6  rounded-2xl shadow-lg flex flex-col gap-4">
			<label htmlFor="number" className="text-xl font-semibold mb-2">
				Enter Amount (Indian Numbering):
			</label>
			<input
				id="number"
				type="text"
				className="border p-2 rounded-md "
				placeholder="e.g., 23,43,533"
				value={number}
				onChange={handleChange}
			/>

			<div className="relative">
				<div className="bg-muted rounded-xl p-4 min-h-[60px] pr-10">{words}</div>
				<Button
					variant="outline"
					size="icon"
					className="disabled:opacity-100 absolute top-2 right-2 z-10"
					onClick={handleCopy}
					aria-label={copied ? "Copied" : "Copy to clipboard"}
					disabled={copied}
				>
					<div
						className={cn(
							"transition-all",
							copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
						)}
					>
						<CheckIcon
							className="stroke-emerald-500"
							size={16}
							aria-hidden="true"
						/>
					</div>
					<div
						className={cn(
							"absolute transition-all",
							copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
						)}
					>
						<CopyIcon size={16} aria-hidden="true" />
					</div>
				</Button>
			</div>
		</div>
	);
};

export default INRWordsConverter;
