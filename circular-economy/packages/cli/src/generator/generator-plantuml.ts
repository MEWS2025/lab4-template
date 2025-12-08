import type { Generator } from './index.js';
import type { CircularEconomy } from 'ceml-language';

export class PlantUmlGenerator implements Generator {
    generate(model: CircularEconomy): string {
        /**
         * TODO: Generate PlantUML diagram.
         */
        throw new Error('Not implemented.')
    }   
}