import React, { useState } from "react";
import { EncryptService } from "@awambeng/bs58-encryptor";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

const EncryptComponent: React.FC = () => {
    const [inputText, setInputText] = useState<string>("");
    const [encryptedText, setEncryptedText] = useState<string>("");
    const [decryptedText, setDecryptedText] = useState<string>("");

    const handleEncrypt = () => {
        const encrypted = EncryptService.encrypt(inputText);
        setEncryptedText(encrypted);
        setDecryptedText(""); // Clear decrypted text when encrypting
    };

    const handleDecrypt = () => {
        const decrypted = EncryptService.decrypt(encryptedText);
        setDecryptedText(decrypted);
    };

    return (
        <Container maxWidth="sm">
            <Box textAlign="center" mt={4} p={3} borderRadius={2} boxShadow={3} bgcolor="white">
                <Typography variant="h4" gutterBottom>
                    Encrypt / Decrypt Data
                </Typography>

                {/* Input Field */}
                <TextField
                    fullWidth
                    label="Enter text to encrypt"
                    variant="outlined"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    sx={{ mb: 2 }}
                />

                {/* Encrypt Button */}
                <Button variant="contained" color="primary" onClick={handleEncrypt} fullWidth>
                    Encrypt
                </Button>

                {/* Encrypted Text Display */}
                {encryptedText && (
                    <Box mt={2} p={2} borderRadius={1} bgcolor="#f5f5f5">
                        <Typography variant="h6">Encrypted Text:</Typography>
                        <Typography variant="body1">{encryptedText}</Typography>
                    </Box>
                )}

                {/* Decrypt Button */}
                {encryptedText && (
                    <Button variant="contained" color="secondary" onClick={handleDecrypt} fullWidth sx={{ mt: 2 }}>
                        Decrypt
                    </Button>
                )}

                {/* Decrypted Text Display */}
                {decryptedText && (
                    <Box mt={2} p={2} borderRadius={1} bgcolor="#e3f2fd">
                        <Typography variant="h6">Decrypted Text:</Typography>
                        <Typography variant="body1">{decryptedText}</Typography>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default EncryptComponent;
