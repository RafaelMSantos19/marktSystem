
---------------------------- Cria Tabela de Produtos

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    seguimento VARCHAR(100),
    peso DECIMAL(10, 2),
    ultima_compra TIMESTAMP,
    descricao TEXT,
    codigo_barras VARCHAR(64) UNIQUE
);

