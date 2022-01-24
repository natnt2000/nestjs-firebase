import { Injectable } from '@nestjs/common';
import { getFirestore } from 'firebase-admin/firestore';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  async create(createCatDto: CreateCatDto) {
    const catDocRef = getFirestore().collection('cats');

    const data = await catDocRef.add(createCatDto);

    console.log(data);
  }

  async get() {
    const catDocRef = getFirestore().collection('cats');

    const data = await catDocRef.orderBy('first', 'asc').limit(5).get();

    return data.docs.map((value) => ({
      ...value.data(),
      id: value.id,
    }));
  }

  async delete(id: string) {
    await getFirestore().collection('cats').doc(id).delete();
  }

  async update(id: string, updateCatDto: UpdateCatDto) {
    await getFirestore().collection('cats').doc(id).set(updateCatDto);
  }
}
