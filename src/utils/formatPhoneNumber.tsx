const formatPhoneNumber = (phoneNumber: string) => {
    // Remover todos os caracteres não numéricos
    const cleaned = phoneNumber.replace(/\D/g, '');
    
    // Verificar se há um código de país (DDI) no início do número
    const countryCode = cleaned.startsWith('55') ? '+55' : '';
    
    // Separar os dígitos do número em grupos e aplicar o formato desejado
    const match = cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);
    if (match) {
        return `${countryCode} (${match[1]}) ${match[2]}-${match[3]}${match[4]}`;
    } else {
        // Se o número não corresponder ao padrão esperado, retornar o número original
        return phoneNumber;
    }
};

export default formatPhoneNumber;
