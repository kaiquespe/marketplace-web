import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { ProductImageUpload } from "../../../components/product-image-upload";
import { Select } from "../../../components/select";

export function ProductForm() {
	const { id } = useParams();
	const isEditing = !!id;

	return (
		<>
			<Helmet title={isEditing ? "Editar produto" : "Cadastrar produto"} />
			<div className="flex flex-col gap-10 p-4 sm:p-6 md:p-8 lg:px-32 lg:py-10">
				<section className="flex flex-col gap-2 mt-8 lg:mt-16">
					<h1 className="title-md">
						{isEditing ? "Editar produto" : "Cadastrar produto"}
					</h1>
					<p className="body-sm">
						{isEditing
							? "Edite as informações do seu produto"
							: "Cadastre um novo produto para vender"}
					</p>
				</section>

				<section className="flex flex-col lg:flex-row gap-8">
					<div className="w-full lg:w-[400px]">
						<ProductImageUpload />
					</div>

					<div className="flex-1 bg-white rounded-[20px] p-6">
						<form className="flex flex-col gap-6">
							<div className="flex flex-col gap-4">
								<div>
									<label htmlFor="title" className="text-sm font-medium">
										Título
									</label>
									<Input
										id="title"
										type="text"
										placeholder="Camisa básica branca"
									/>
								</div>

								<div>
									<label htmlFor="price" className="text-sm font-medium">
										Preço
									</label>
									<Input
										id="price"
										type="text"
										placeholder="R$ 0,00"
									/>
								</div>

								<div>
									<label htmlFor="description" className="text-sm font-medium">
										Descrição
									</label>
									<textarea
										id="description"
										className="mt-2 w-full h-32 resize-none rounded-lg border border-zinc-300 px-3 py-2"
										placeholder="Descreva o seu produto em detalhes"
									/>
								</div>

								<div>
									<label htmlFor="category" className="text-sm font-medium">
										Categoria
									</label>
									<Select
										id="category"
										placeholder="Selecione uma categoria"
										options={[
											{ label: "Eletrônicos", value: "electronics" },
											{ label: "Acessórios", value: "accessories" },
											{ label: "Roupas", value: "clothing" },
										]}
									/>
								</div>
							</div>

							<div className="flex flex-col-reverse sm:flex-row gap-4 pt-5">
								{isEditing && (
									<>
										<Button
											variant="outline"
											label="Marcar como vendido"
											onClick={() => {}}
										/>
										<Button
											variant="outline"
											label="Desativar produto"
											onClick={() => {}}
										/>
										<div className="flex-1" />
									</>
								)}
								<Button
									variant="solid"
									label={isEditing ? "Salvar alterações" : "Cadastrar produto"}
									onClick={() => {}}
								/>
							</div>
						</form>
					</div>
				</section>
			</div>
		</>
	);
}
