const formatPhoneNumber = (phoneNumber: string) => {
    const cleaned = phoneNumber.replace(/\D/g, '');
    
    let countryCode = '';
    if (cleaned.startsWith('55')) {
        countryCode = '+55';
    }
    
    const match = cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);
    if (match) {
        return `${countryCode} (${match[2]}) ${match[3]}-${match[4]}`;
    } else {
        return phoneNumber;
    }
};

export default formatPhoneNumber;

