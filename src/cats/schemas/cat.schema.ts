import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CatDocument = Cat & Document;

@Schema()
export class Cat {

    @Prop()
    name: String;

    @Prop()
    age: number;

}

export const CatSchema = SchemaFactory.createForClass(Cat);