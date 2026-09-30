import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from "process";
const rl = readline.createInterface({input, output});
import { AtendimentoBiblioteca } from './AtendimentoBiblioteca.js';

const terminalFísico = new AtendimentoBiblioteca();

terminalFísico.cadastrarNovoLeitor("lais", "Dez");
terminalFísico.cadastrarNovoLeitor("lais", 10);
terminalFísico.cadastrarNovoLeitor("lais", 25);


rl.close();